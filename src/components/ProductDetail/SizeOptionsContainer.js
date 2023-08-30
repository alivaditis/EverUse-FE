const SizeOptionsContainer = ({isSingleSize, handleSelect}) => {
  return (
    <div className="size-options-container" onChange={(e) => handleSelect(e, "size")}>
      {!isSingleSize && <div className="multiple-choice-container">
        <>
          <input type="radio" name="size-options" id="S" value="S" className="multiple-choice-option"/>
          <label htmlFor='S'>S</label>
        </>
        <>
          <input type="radio" name="size-options" id="M" value="M" className="multiple-choice-option"/>
          <label htmlFor='M'>M</label>
        </>
        <>
          <input type="radio" name="size-options" id="L" value="L" className="multiple-choice-option"/>
          <label htmlFor='L'>L</label>
        </>
      </div>}
      {isSingleSize && <div className="single-choice-container">
        <input type="radio" name="size-options" id="onesize" value="onesize" className="single-choice-option"/>
        <label htmlFor='onesize'>One Size</label>
      </div>}
    </div>
  )
}

export default SizeOptionsContainer;