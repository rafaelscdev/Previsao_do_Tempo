function buscarDadosTemperatura(latitude, longitude, cidade) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const temperatura = data.current.temperature;
        const hora = data.current.time;
        const temperaturaElement = document.querySelector(`#${cidade} .temperature`);
        const horaElement = document.querySelector(`#${cidade} .time`);
        temperaturaElement.innerText = `${temperatura}°C`;
        horaElement.innerText = `Hora: ${hora}`;
      })
      .catch(error => console.log('Erro:', error));
  }
  
  buscarDadosTemperatura(-23.5505, -46.6333, 'sao-paulo');
  buscarDadosTemperatura(-22.9068, -43.1729, 'rio-de-janeiro');
  buscarDadosTemperatura(-19.8157, -43.9542, 'belo-horizonte');
  buscarDadosTemperatura(-1.4558, -48.5032, 'belem');
  buscarDadosTemperatura(-27.5935, -48.5477, 'florianopolis');
  buscarDadosTemperatura(-15.8267, -47.9218, 'brasilia');
  