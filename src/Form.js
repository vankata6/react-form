import React from 'react'

export const Form = () => {
  return (
    <div>
        <form>
            <div>
                <label htmlFor="first-name">First name:</label>
                <input type="text" id="first-name" required />
                <label htmlFor="last-name">Last name:</label>
                <input type="text" id="last-name" required />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" required />
            </div>
            <div>
                <label htmlFor="phone-number"> Phone number:</label>
                <input type="number" id="phone-number" required />
            </div>
            <div>
                <label htmlFor="message-subject">Message subject:</label>
                <textarea id="message-subject" required />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea id="message" required />
            </div>
            <button type="submit">Button</button>
      </form>
    </div>
  )
}
