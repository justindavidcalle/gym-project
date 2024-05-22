import React from 'react'

interface attentionCardProps {
  attentionCard: {
    title: string;
    description: string;
  }
  img: string;
}

const attentionCard = (props: attentionCardProps) => {
  const img = props.img
  const {title, description} = props.attentionCard
  return (
    <div className='card-container'>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div>
        <img src={img} />
      </div>
    </div>
  )
}

export default attentionCard