import React from "react";

export default function Daddy(){
    return(
        <div class="modal">
  <form class="form">
    <div class="banner"></div>
    <label class="title">Get New customers faster</label>
    <p class="description">Grow your customer base with our tools, you can reach a much bigger and better fan community. Go PRO now! </p>
    <div class="tab-container">
      <button class="tab tab--1">Monthly</button>
      <button class="tab tab--2">Annual</button>
      <div class="indicator"></div>
    </div>

    <div class="benefits">
      <span>What we offer</span>
      <ul>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" height="16" width="16">
            <rect fill="black" rx="8" height="16" width="16"></rect>
            <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="white" d="M5 8.5L7.5 10.5L11 6"></path>
          </svg>
          <span>Grow your customer with our social network tools</span>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" height="16" width="16">
            <rect fill="black" rx="8" height="16" width="16"></rect>
            <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="white" d="M5 8.5L7.5 10.5L11 6"></path>
          </svg>
          <span>Use E-mail automations to promote your products.</span>
        </li>
      </ul>
    </div>

    <div class="modal--footer">
      <label class="price"><sup>$</sup>9<sub>/mo</sub></label>
      <button class="upgrade-btn">Upgrade to PRO</button>
    </div>
  </form>
</div>
    )
}