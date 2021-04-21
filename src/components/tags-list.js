import React from 'react'
import setupTags from '../utils/setup-tags'

const TagsList = ({ recipes }) => {
  const newTags = setupTags(recipes)
  return (
    <div>
      <h4>Tags List</h4>
    </div>
  )
}

export default TagsList
