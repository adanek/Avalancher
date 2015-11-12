package controllers;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import com.fasterxml.jackson.databind.JsonNode;

import models.AreaInfo;
import models.HotelInfo;
import models.SkiArea;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

/**
 * Created by adanek on 10.11.2015.
 */
public class AreaController extends Controller {

	private List<AreaInfo> areas = new ArrayList<AreaInfo>();

	public AreaController() {

		// add relevant ski area data
		areas.add(createArea("Kitzbühel-Kirchberg", "kitzbuehel-kirchberg", "Kitzbühel"));
		areas.add(createArea("Glungezer", "glungezer", "Tulfes"));
		areas.add(createArea("Pitztaler Gletscher", "pitztalergletscher", "Pitztal"));

	}

	// get ski area data
	public Result getAreas() throws IOException {

		List<SkiArea> areas = new ArrayList<>();

		for (int i = 0; i < this.areas.size(); i++) {
			areas.add(getAreaData(getAreaByName(this.areas.get(i).getName())));
		}

		JsonNode responseData = Json.toJson(areas);
		return ok(responseData);
	}

	// get area info by area name
	private AreaInfo getAreaByName(String name) {

		// get iterator
		Iterator<AreaInfo> it = areas.iterator();

		// search for requested area
		while (it.hasNext()) {
			AreaInfo area = it.next();
			if (area.getName().equals(name)) {
				return area;
			}
		}
		return null;

	}

	// create area info object
	private AreaInfo createArea(String name, String areaUrl, String city) {

		String api = "https://api.import.io/store/data/a9f04bc5-b0c7-4e92-b84b-87fe987afd9b/_query?input/webpage/url=http%3A%2F%2Fwww.bergfex.at%2F$NAME$%2Fschneebericht%2F&_user=1cd7d171-f82d-4045-a7a6-4db9f3ebaaa9&_apikey=1cd7d171f82d4045a7a64db9f3ebaaa94cb03ebaa6044b7204eedc4e62554e475a241077ba892154bb6354580660793f09ef6b91f0d14f9f934e713416a96bf7d66e6983ddfa4d062b8fd7ba1e2c0c2f";

		api = api.replace("$NAME$", areaUrl);

		URL url = null;

		try {
			url = new URL(api);
		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return new AreaInfo(name, url, city);

	}

	// get data for one specific ski area
	private SkiArea getAreaData(AreaInfo area) throws IOException {

		URL url = area.getUrl();

		HttpURLConnection connection;
		connection = (HttpURLConnection) url.openConnection();
		connection.setRequestMethod("GET");
		connection.setRequestProperty("Accept", "application/json");
		connection.setDoInput(true);
		connection.setDoOutput(false);
		connection.setUseCaches(false);

		BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));

		String jsonText = "";
		for (String line; (line = reader.readLine()) != null;) {
			jsonText = jsonText + line;
		}

		JSONParser parser = new JSONParser();
		SkiArea skiArea = new SkiArea();
		try {
			JSONObject obj = (JSONObject) parser.parse(jsonText);
			JSONArray array = (JSONArray) obj.get("results");

			skiArea.name = area.getName();
			skiArea.city = area.getCity();

			if (array.size() > 0) {
				JSONObject obj1 = (JSONObject) array.get(0);

				skiArea.avalancherisk = (String) obj1.get("lawinenstufe");
				skiArea.snowHeight = (String) obj1.get("schneehoehe");
				skiArea.newSnow = (String) obj1.get("neuschnee");
			}

		} catch (ParseException pe) {

			System.out.println("position: " + pe.getPosition());
			System.out.println(pe);
		}

		reader.close();

		return skiArea;

	}

}
