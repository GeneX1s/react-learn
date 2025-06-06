function Message(){
  const name = "Owen";
  //This is JSX, a javascript XML is a syntax extension for JavaScript that looks similar to XML or HTML.
  if (name)
  return <h1>Hello {name}</h1>
  return <h1>Hello World</h1>
  
}

export default Message;