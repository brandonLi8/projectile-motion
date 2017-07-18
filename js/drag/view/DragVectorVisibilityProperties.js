// Copyright 2015-2016, University of Colorado Boulder

/**
 * View properties that are specific to visibility of vectors
 *
 * @author Andrea Lin (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var projectileMotion = require( 'PROJECTILE_MOTION/projectileMotion' );
  var Property = require( 'AXON/Property' );
  var BooleanProperty = require( 'AXON/BooleanProperty' );
  var VectorVisibilityProperties = require( 'PROJECTILE_MOTION/common/view/VectorVisibilityProperties' );

  /**
   * @constructor
   */
  function DragVectorVisibilityProperties() {
    VectorVisibilityProperties.call( this );

    // vectors visibility for velocity and force, total or component
    this.velocityVectorsOnProperty = new BooleanProperty( false );
    this.forceVectorsOnProperty = new BooleanProperty( false );
    this.totalOrComponentsProperty = new Property( 'total' ); // or 'components'

    // update which vectors to show based on controls
    // Doesn't need to be disposed because it lasts for the lifetime of the sim
    Property.multilink( [
      this.velocityVectorsOnProperty,
      this.forceVectorsOnProperty,
      this.totalOrComponentsProperty
    ], this.updateVectorVisibilities.bind( this ) );

  }

  projectileMotion.register( 'DragVectorVisibilityProperties', DragVectorVisibilityProperties );

  return inherit( VectorVisibilityProperties, DragVectorVisibilityProperties, {

    /**
     * Reset these properties
     * @public
     * @override
     */
    reset: function() {
      VectorVisibilityProperties.prototype.reset.call( this );
      this.velocityVectorsOnProperty.reset();
      this.forceVectorsOnProperty.reset();
      this.totalOrComponentsProperty.reset();
    },

    /**
     * Update vector visibilities based on whether velocity and/or force vectors are on, and whether total or components
     * @private
     *
     * @param {boolean} velocityVectorsOn
     * @param {boolean} forceVectorsOn
     * @param {string} totalOrComponents
     */
    updateVectorVisibilities: function( velocityVectorsOn, forceVectorsOn, totalOrComponents ) {
      this.totalVelocityVectorOnProperty.set( velocityVectorsOn && totalOrComponents === 'total' );
      this.componentsVelocityVectorsOnProperty.set( velocityVectorsOn && totalOrComponents === 'components' );
      this.totalForceVectorOnProperty.set( forceVectorsOn && totalOrComponents === 'total' );
      this.componentsForceVectorsOnProperty.set( forceVectorsOn && totalOrComponents === 'components' );
    }
  } );
} );
