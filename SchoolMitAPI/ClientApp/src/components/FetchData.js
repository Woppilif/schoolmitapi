import React, { Component } from "react";
import authService from "./api-authorization/AuthorizeService";
import TaskForm from "./TaskForm";
export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
    this.createTask = this.createTask.bind(this);
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  createTask() {
    this.setState({ forecasts: [], loading: true });
    this.populateWeatherData();
  }
  static renderForecastsTable(forecasts) {
    return (
      <table className="table table-striped" aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Сообщение</th>
            <th>Дата и время</th>
            <th>Платформы</th>
            <th>-</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map((forecast) => (
            <tr key={forecast.id}>
              <td>{forecast.message}</td>
              <td>{forecast.time}</td>
              <td>{forecast.platforms}</td>
              <td>Del</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      FetchData.renderForecastsTable(this.state.forecasts)
    );

    return (
      <div>
        <TaskForm createComponent={this.createTask} />
        <h1 id="tabelLabel">Рассылки</h1>
        <p>Все рассылки</p>
        {contents}
      </div>
    );
  }

  async populateWeatherData() {
    const token = await authService.getAccessToken();
    const response = await fetch("api/TaskManagers/", {
      headers: !token ? {} : { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }
}
