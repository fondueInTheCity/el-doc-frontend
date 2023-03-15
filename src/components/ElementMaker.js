function ElementMaker(props) {
  return (
    <span>
      {props.showInputEle ? (
        <input
          type='text'
          value={props.value}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          name={props.name}
          autoFocus
        />
      ) : (
        <span
          onDoubleClick={props.handleDoubleClick}
          style={{
            display: 'inline-block',
            height: '25px',
            minWidth: '300px',
          }}
        >
          {props.value}
        </span>
      )}
    </span>
  )
}

export default ElementMaker
