import React from 'react'
import "../../styles/Appointment.css";


export const Appointmnet=()=> {
  return (
    <div className='appointment'>
      <div className='appointment-title'>
      <h1 className='bigger-text'>MAKE AN <span className='yellow'>APPOINTMENT</span></h1>
      <h1 className='bigger-text'>Consult With Our <br/>Doctor</h1>
      </div>
<div class="appointment-body">
  <div class="form">
    <form method="POST">
      <div className='first-data'>
      <div class="form-shape">
        <label for="name" class="form-label"> Full Name </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          class="form-input"
        />
      </div>
      <div class="form-shape">
        <label for="phone" class="form-label"> Phone Number </label>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Enter your phone number"
          class="form-input"
        />
      </div>
      <div class="form-shape">
        <label for="email" class="form-label"> Email Address </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          class="form-input"
        />
      </div>
      </div>
      <div class="flex">
        <div class="w-full w-half ">
          <div class="form-shape w-full">
            <label for="date" class="form-label"> Date </label>
            <input
              type="date"
              name="date"
              id="date"
              class="form-input"
            />
          </div>
        </div>
        <div class="w-full w-half ">
          <div class="form-shape">
            <label for="time" class="form-label"> Time </label>
            <input
              type="time"
              name="time"
              id="time"
              class="form-input"
            />
          </div>
        </div>
      </div>
      <div className='second-data'>
      <div class="form-shape ">
        <label class="form-label form-label-2">
          Address Details
        </label>
        <div class="flex flex-wrap">
          <div class="w-full w-half">
            <div class="form-shape">
              <input
                type="text"
                name="area"
                id="area"
                placeholder="Enter area"
                class="form-input"
              />
            </div>
          </div>
          <div class="w-full w-half">
            <div class="form-shape">
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Enter city"
                class="form-input"
              />
            </div>
          </div>
          <div class="w-full w-half">
            <div class="form-shape">
              <input
                type="text"
                name="state"
                id="state"
                placeholder="Enter state"
                class="form-input"
              />
            </div>
          </div>
          <div class="w-full w-half">
            <div class="form-shape">
              <input
                type="text"
                name="post-code"
                id="post-code"
                placeholder="Post Code"
                class="form-input"
              />
            </div>
          </div>
        </div>
      </div>
      <div className='appointment-button'>
        <button class="another-button">Book Appointment</button>
      </div>
      </div>
    </form>
  </div>
</div>
</div>)}