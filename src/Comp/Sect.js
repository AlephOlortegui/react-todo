const Sect = () => {
  return (
    <section>
      <p className="counter"><span>3</span> items left</p>
      <div className="filterBox">
        <button className="btn active">All</button>
        <button className="btn">Undone</button>
        <button className="btn">Completed</button>
      </div>
      <div className="corner">
        <button className="btn">Clear All Items</button>
      </div>
    </section>
  )
}

export default Sect