import Ember from 'ember'
const {A, Controller, computed, get, Object: emObject} = Ember

export default Controller.extend({
  selectedTab: 'topo',

  init() {
    this._super(...arguments)

    setTimeout(() => {
      this.set('model', emObject.create({
        sites: A([
          emObject.create({
            id: 'foo',
            text: 'foo'
          }),
          emObject.create({
            id: 'bar',
            text: 'bar'
          }),
          emObject.create({
            id: 'baz',
            text: 'baz'
          }),
        ])
      }),)
    }, 3000)
  },

  linkEndSite: computed('linkEndSiteId', 'model.sites.[]', function () {
    const id = this.get('linkEndSiteId')
    const sites = this.get('model.sites') || []

    let endSite = null
    sites.forEach((site) => {
      if (get(site, 'id') === id) {
        endSite = site
      }
    })
    return endSite
  }),

  actions: {
    selectTab(tabId) {
      this.set('selectedTab', tabId)
    },

    onEndAddLink(siteId) {
      this.set('linkEndSiteId', siteId)
    }
  }
})
