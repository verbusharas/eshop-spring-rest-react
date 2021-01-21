package lt.verbus.backend.controller.dto;

import lt.verbus.backend.http.weather.dto.WeatherPOJO;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LocationDTO {

    private String latitude;

    private String longitude;

    private String city;

    private WeatherPOJO weather;
}
