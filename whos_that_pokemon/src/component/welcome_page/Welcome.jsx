import "./welcome.css";
export default function Welcome() {
  return (
    <div className='welcome-page'>
      <h1 className='title'>Who's that Pokemon?</h1>
      <img className='main-image' src='/assets/mainPokemon.png' />
      <p className='input-username'>Please type your name</p>
      <div className='input-group mb-3 w-15'>
        <input
          type='text'
          className='w-75 form-control'
          aria-label='Sizing example input'
          aria-describedby='inputGroup-sizing-default'
        />
      </div>
      <button type='button' className='btn w-15 btn-primary'>
        Submit
      </button>
    </div>
  );
}
