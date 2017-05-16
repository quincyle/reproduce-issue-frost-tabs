/**
 * Component definition for the dt-topo component
 */

import {Component} from 'ember-frost-core'
import {PropTypes} from 'ember-prop-types'

import layout from './template'

export default Component.extend({
  // == Dependencies ==========================================================

  // == Keyword Properties ====================================================

  layout,

  linkEnd: Ember.computed('linkEndSite', function () {
    if (!this.get('linkEndSite')) {
      return null
    }
    return this.get('linkEndSite.text')
  }),

  actions: {
    bubbleClick(value) {
      this.onEndAddLink(value)
    }
  }


})
