import React from 'react'
import './article.css'

function Article({id,title,body,tema}) {
  
  return (
    
    <div className={`article ${tema ==='dark-theme' ? 'dark-theme-article' : ''} `}>
      <h3>
        {title}
      </h3>
      <p>
        {body}
      </p>
    </div>
  )
}

export default Article