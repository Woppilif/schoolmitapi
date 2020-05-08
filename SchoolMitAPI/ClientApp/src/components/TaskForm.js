import React, { Component } from "react";
import authService from "./api-authorization/AuthorizeService";

export default class TaskForm extends Component {
  static displayName = TaskForm.name;

  constructor(props) {
    super(props);
    this.state = {
      telegram: false,
      vk: false,
      viber: false,
      message: "",
      time: new Date(),
    };
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { telegram, vk, viber, message, time } = this.state;
    const platforms = [];
    if (telegram === "on") {
      platforms.push("telegram");
    }
    if (vk === "on") {
      platforms.push("vk");
    }
    if (viber === "on") {
      platforms.push("viber");
    }
    const request = { message, time, platforms };

    this.createTask(request);
    this.setState({
      telegram: false,
      vk: false,
      viber: false,
      message: "",
      time: new Date().getTime(),
    });
  };

  async createTask(request) {
    console.log("request " + JSON.stringify(request));
    const token = await authService.getAccessToken();
    const response = await fetch("api/TaskManagers/", {
      headers: !token
        ? {}
        : {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
      method: "POST",
      body: JSON.stringify(request),
    });
    const data = await response.json();
    console.log(data);
  }

  render() {
    const { telegram, vk, viber, message, time } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Добавление рассылки</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Сообщение</label>
            <textarea
              className="form-control"
              type="text"
              name="message"
              onChange={this.onChange}
              value={message}
            />
          </div>
          <div className="form-group">
            <label>Платформы</label>
            <br></br>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="telegram"
                name="telegram"
                onChange={this.onChange}
                checked={telegram}
              />
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                Telegram
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="vk"
                name="vk"
                onChange={this.onChange}
                checked={vk}
              />
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                VK
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="viber"
                name="viber"
                onChange={this.onChange}
                checked={viber}
              />
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                Viber
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>Дата и время</label>
            <input
              type="datetime-local"
              id="time"
              name="time"
              value={time}
              onChange={this.onChange}
              required
            ></input>
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => this.props.createComponent()}
            >
              Сохранить
            </button>
          </div>
        </form>
      </div>
    );
  }

  //async populateWeatherData() {
  //    const token = await authService.getAccessToken();
  //    const response = await fetch('api/TaskManagers/', {
  //        headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
  //    });
  //    const data = await response.json();
  //    this.setState({ forecasts: data, loading: false });
  //}
}
