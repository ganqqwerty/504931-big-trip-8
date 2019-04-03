
import moment from 'moment';

export default class ModelEvents {
  constructor(data) {
    this.id = data[`id`];
    this.destination = data[`destination`];
    this.type = data[`type`].replace(`-`, ``);
    this.departureTime = moment(data[`date_from`]);
    this.arrivalTime = moment(data[`date_to`]);
    this.price = data[`base_price`];
    this.isFavorite = Boolean(data[`is_favorite`]);
    this.offer = [];
  }

  static parseEvent(data) {
    return new ModelEvents(data);
  }

  static parseEvents(data) {
    return data.map(ModelEvents.parseEvent);
  }
}

