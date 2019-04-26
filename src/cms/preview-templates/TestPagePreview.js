import React from 'react'
import PropTypes from 'prop-types'
import TestPage from '../../templates/test-page'

const TestPagePreview = ({ entry, widgetFor }) => (
  <TestPage
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

TestPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TestPagePreview



