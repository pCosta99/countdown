import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["hours", "minutes", "seconds"]

  connect() {
    setInterval(() => this.react(this), 1000);
  }

  react(base) {
    const seconds = base.secondsTarget.textContent;
    const minutes = base.minutesTarget.textContent;
    const hours = base.minutesTarget.textContent;
    if (hours == "0" && minutes == "0" && seconds == "0") {
      window.location.reload();
    }
    if (minutes == "0" && seconds == "0") {
      base.secondsTarget.textContent = "59";
      base.minutesTarget.textContent = "59";
      base.hoursTarget.textContent = parseInt(hours) - 1;
    } else if (seconds == "0") {
      base.secondsTarget.textContent = "59";
      base.minutesTarget.textContent = parseInt(minutes) - 1;
    } else {
      base.secondsTarget.textContent = parseInt(seconds) - 1;
    }
  }
}
