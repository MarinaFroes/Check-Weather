import React from 'react';

const Form = ({ getWeather }) => (
  <form onSubmit={getWeather}>
    <input type="text" name="city" placeholder="City..." />
    <input type="text" name="country" placeholder="Country..." />
    <input type="submit" value="Get Weather" />
  </form>
)

export default Form;