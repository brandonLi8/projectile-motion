// Copyright 2015, University of Colorado Boulder

/**
 * ScreenView for the 'Intro' screen
 * @author Andrea Lin (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var IntroProjectilePanel = require( 'PROJECTILE_MOTION/intro/view/IntroProjectilePanel' );
  var IntroVectorsPanel = require( 'PROJECTILE_MOTION/intro/view/IntroVectorsPanel' );
  var projectileMotion = require( 'PROJECTILE_MOTION/projectileMotion' );
  var ProjectileMotionScreenView = require( 'PROJECTILE_MOTION/common/view/ProjectileMotionScreenView' );
  var VectorVisibilityProperties = require( 'PROJECTILE_MOTION/common/view/VectorVisibilityProperties' );

  /**
   * @param {IntroModel} model
   * @constructor
   */
  function IntroScreenView( model, options ) {

    var self = this;

    options = options || {};
    
    // contains properties about vector visibility, used in super class
    var visibilityProperties = new VectorVisibilityProperties();

    // second panel shows dropdown of projectiles, air resistance checkbox, and disabled parameters
    options = _.extend( {
      secondPanel: new IntroProjectilePanel( model ),
      vectorsPanel: new IntroVectorsPanel( visibilityProperties ),
      vectorVisibilityProperties: visibilityProperties
   }, options );

    ProjectileMotionScreenView.call( self, model, options );

  }

  projectileMotion.register( 'IntroScreenView', IntroScreenView );

  return inherit( ProjectileMotionScreenView, IntroScreenView );
} );

