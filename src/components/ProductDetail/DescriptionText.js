// DESCRIPTION TEXT COMPONENT //

const DescriptionText = ({description}) => {
  return (
    <article className="product-description-text">
      <h2>Description</h2>
      <p>
        {description}
      </p>
    </article>
  )
}

export default DescriptionText;