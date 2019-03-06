
export default (event) =>
  `
  <article class="trip-point">
          <i class="trip-icon">${event.type}</i>
          <h3 class="trip-point__title">${event.title}</h3>
          <p class="trip-point__schedule">
            <span class="trip-point__timetable">${event.departureTime}&nbsp;&mdash; ${event.arrivalTime}</span>
            <span class="trip-point__duration">${event.duration}</span>
          </p>
          <p class="trip-point__price">€ ${event.price}</p>
          <ul class="trip-point__offers">
            <li>
              <button class="trip-point__offer">${event.offer}</button>
            </li>
            <li>
              <button class="trip-point__offer">${event.offer}</button>
            </li>
          </ul>
        </article>
  `;


