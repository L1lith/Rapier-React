const { useRapier } = require('../dist/rapier-hooks')
const dom = require('./dom')
const { render } = require('react-dom')
const { expect } = require('chai')
const { createElement } = require('react')

const rapierUnready = 'Rapier loading...'
const rapierReady = 'Rapier loaded'

function TestComponent() {
  const RAPIER = useRapier()
  if (RAPIER === null) return rapierUnready
  return rapierReady
}

describe('the useRapier hook functions correctly', () => {
  let app
  before(() => {
    app = document.createElement('div')
    document.body.appendChild(app)
  })
  it('Can render the test component before rapier has loaded', () => {
    const reactNode = createElement(TestComponent)
    render(reactNode, app)
    expect(app.innerHTML).to.equal(rapierUnready)
  })
  it('Can render the test component after rapier has loaded', function () {
    this.retries(20)
    const reactNode = createElement(TestComponent)
    render(reactNode, app)
    expect(app.innerHTML).to.equal(rapierReady)
  })
})
