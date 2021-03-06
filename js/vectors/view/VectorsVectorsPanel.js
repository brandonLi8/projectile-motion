// Copyright 2016-2018, University of Colorado Boulder

/**
 * Control panel for choosing which vectors are visible.
 *
 * @author Andrea Lin (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var Checkbox = require( 'SUN/Checkbox' );
  var HBox = require( 'SCENERY/nodes/HBox' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Panel = require( 'SUN/Panel' );
  var projectileMotion = require( 'PROJECTILE_MOTION/projectileMotion' );
  var ProjectileMotionConstants = require( 'PROJECTILE_MOTION/common/ProjectileMotionConstants' );
  var Text = require( 'SCENERY/nodes/Text' );
  var VBox = require( 'SCENERY/nodes/VBox' );
  var VerticalAquaRadioButtonGroup = require( 'SUN/VerticalAquaRadioButtonGroup' );

  // strings
  var accelerationVectorsString = require( 'string!PROJECTILE_MOTION/accelerationVectors' );
  var componentsString = require( 'string!PROJECTILE_MOTION/components' );
  var forceVectorsString = require( 'string!PROJECTILE_MOTION/forceVectors' );
  var totalString = require( 'string!PROJECTILE_MOTION/total' );
  var velocityVectorsString = require( 'string!PROJECTILE_MOTION/velocityVectors' );

  // constants
  var LABEL_OPTIONS = ProjectileMotionConstants.PANEL_LABEL_OPTIONS;
  var VELOCITY_VECTOR_ICON = ProjectileMotionConstants.VELOCITY_VECTOR_ICON;
  var ACCELERATION_VECTOR_ICON = ProjectileMotionConstants.ACCELERATION_VECTOR_ICON;
  var FORCE_VECTOR_ICON = ProjectileMotionConstants.FORCE_VECTOR_ICON;

  /**
   * @param {VectorVisibilityProperties} vectorVisibilityProperties - Properties that determine which vectors are shown
   * @param {Object} [options]
   * @constructor
   */
  function VectorsVectorsPanel( vectorVisibilityProperties, options ) {

    // The first object is a placeholder so none of the others get mutated
    // The second object is the default, in the constants files
    // The third object is options specific to this panel, which overrides the defaults
    // The fourth object is options given at time of construction, which overrides all the others
    options = _.extend( {}, ProjectileMotionConstants.RIGHTSIDE_PANEL_OPTIONS, { align: 'left' }, options );

    var checkboxOptions = {
      maxWidth: options.minWidth - 3 * options.xMargin - VELOCITY_VECTOR_ICON.width,
      boxWidth: 18
    };

    var totalLabel = new Text( totalString, LABEL_OPTIONS );
    var componentsLabel = new Text( componentsString, LABEL_OPTIONS );

    var totalOrComponentsGroup = new VerticalAquaRadioButtonGroup( [
      { node: totalLabel, property: vectorVisibilityProperties.totalOrComponentsProperty, value: 'total' },
      { node: componentsLabel, property: vectorVisibilityProperties.totalOrComponentsProperty, value: 'components' }
    ], {
      radioButtonOptions: { radius: 8 },
      spacing: 10,     // vertical spacing between each radio button
      touchAreaXDilation: 5,
      maxWidth: checkboxOptions.maxWidth
    } );

    var velocityLabel = new Text( velocityVectorsString, LABEL_OPTIONS );
    var velocityCheckbox = new Checkbox(
      velocityLabel,
      vectorVisibilityProperties.velocityVectorsOnProperty,
      checkboxOptions
    );
    var velocityCheckboxAndIcon = new HBox( {
      spacing: options.minWidth - velocityCheckbox.width - VELOCITY_VECTOR_ICON.width - 2 * options.xMargin,
      children: [
        velocityCheckbox,
        VELOCITY_VECTOR_ICON
      ]
    } );

    var accelerationLabel = new Text( accelerationVectorsString, LABEL_OPTIONS );
    var accelerationCheckbox = new Checkbox(
      accelerationLabel,
      vectorVisibilityProperties.accelerationVectorsOnProperty,
      checkboxOptions
    );
    var accelerationCheckboxAndIcon = new HBox( {
      spacing: options.minWidth - accelerationCheckbox.width - ACCELERATION_VECTOR_ICON.width - 2 * options.xMargin,
      children: [
        accelerationCheckbox,
        ACCELERATION_VECTOR_ICON
      ]
    } );

    var forceLabel = new Text( forceVectorsString, LABEL_OPTIONS );
    var forceCheckbox = new Checkbox( forceLabel, vectorVisibilityProperties.forceVectorsOnProperty, checkboxOptions );
    var forceCheckboxAndIcon = new HBox( {
      spacing: options.minWidth - forceCheckbox.width - FORCE_VECTOR_ICON.width - 2 * options.xMargin,
      children: [
        forceCheckbox,
        FORCE_VECTOR_ICON
      ]
    } );

    // The contents of the control panel
    var content = new VBox( {
      align: 'left',
      spacing: options.controlsVerticalSpace,
      children: [
        totalOrComponentsGroup,
        velocityCheckboxAndIcon,
        accelerationCheckboxAndIcon,
        forceCheckboxAndIcon
      ]
    } );

    Panel.call( this, content, options );
  }

  projectileMotion.register( 'VectorsVectorsPanel', VectorsVectorsPanel );

  return inherit( Panel, VectorsVectorsPanel );
} );

