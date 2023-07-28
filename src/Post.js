export default function Post() {
  return (
    <div class="post">
      <div class="image">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCAT4E-tt2IShGHXhwh26S8NLx1DBlSy-Jxw&usqp=CAU"
          alt=""
        />
      </div>
      <div class="texts">
        <h2> Blog on Fire </h2>
        <p class="info">
          <a className="author"> Lori Henderson </a>
          <time> 2023-07-24 </time>
        </p>
        <p className="summary">
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
          corporis unde, laboriosam perferendis vel ea quasi explicabo beatae,
          fugiat, dolores exercitationem laudantium expedita quisquam tenetur
          quos consectetur in omnis sapiente.{" "}
        </p>
      </div>
    </div>
  );
}
