package models;

import java.net.URL;

public class AreaInfo {

	private String name;
	private URL url;
	private String city;
	
	public AreaInfo(String name, URL url, String city){
		this.name = name;
		this.url  = url;
		this.city = city;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public URL getUrl() {
		return url;
	}
	public void setUrl(URL url) {
		this.url = url;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}
	
}
