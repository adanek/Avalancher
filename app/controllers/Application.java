package controllers;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;

import com.fasterxml.jackson.databind.JsonNode;
import models.SkiArea;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;
import views.html.*;

public class Application extends Controller {

	public Result index() {
		List<String> result = new LinkedList<>();
		result.add("Your new application is now ready.");
		return ok(index.render(result));
	}

	public Result getHotels() throws IOException {

		URL url = new URL(
				"https://api.import.io/store/data/9ba76de5-a864-416a-9626-a7499a6c00c5/_query?input/webpage/url=http%3A%2F%2Fwww.booking.com%2Fsearchresults.de.html%3Fsrc%3Dindex%26nflt%3D%26ss_raw%3DInnsbruck%26error_url%3Dhttp%253A%252F%252Fwww.booking.com%252Findex.de.html%253Flabel%253Dgen173nr-15CAEoggJCAlhYSDNiBW5vcmVmaA6IAQGYAQe4AQTIAQTYAQPoAQE%253Bsid%253D4fac978bef28eab2213548375c6753e8%253Bdcid%253D1%253Bbb_ltbi%253D0%253Bsb_price_type%253Dtotal%2526%253B%26dcid%3D1%26label%3Dgen173nr-15CAEoggJCAlhYSDNiBW5vcmVmaA6IAQGYAQe4AQTIAQTYAQPoAQE%26sid%3D4fac978bef28eab2213548375c6753e8%26si%3Dai%252Cco%252Cci%252Cre%252Cdi%26ss%3DInnsbruck%252C%2BTirol%252C%2B%25C3%2596sterreich%26idf%3Don%26room1%3DA%252CA%26no_rooms%3D1%26group_adults%3D2%26group_children%3D0%26dest_type%3Dcity%26dest_id%3D-1981445%26ac_pageview_id%3Dd7c354eedf4b0049%26ac_position%3D0%26ac_langcode%3Dde%26ac_suggestion_list_length%3D5%26place_types%3D&_user=1dbdc05e-3813-4478-bc00-9e49135be330&_apikey=1dbdc05e38134478bc009e49135be330fca7a71e7ee46bc515674cfeb0eb50ba15d9b37e0b020e7580239f665577b6926134b5afcd98de12b09aaf4130bee7fc59700445a5c65420972c184285ed9e45");
		HttpURLConnection connection = (HttpURLConnection) url.openConnection();
		connection.setRequestMethod("GET");
		connection.setRequestProperty("Accept", "application/json");
		// connection.setRequestProperty("Cookie",
		// "optimizelySegments=%7B%22987170280%22%3A%22direct%22%2C%22983970299%22%3A%22false%22%2C%22984740292%22%3A%22ff%22%7D;
		// optimizelyEndUserId=oeu1446546180017r0.4487600374484553;
		// optimizelyBuckets=%7B%7D; _ga=GA1.2.1100198521.1446546181;
		// wooTracker=kKEMpajzwwql; __zlcmid=XWf4izUb9jw7VK;
		// __ar_v4=3ZRVZG2W6NATXEQ2CNVMZO%3A20151103%3A3%7CZ3EZ4BIE4JHXVB7ULMXCTO%3A20151103%3A3%7C5BR4KUHJZZFLLIFPVLD2U6%3A20151103%3A3;
		// ajs_user_id=%221dbdc05e-3813-4478-bc00-9e49135be330%22;
		// ajs_group_id=null;
		// ajs_anonymous_id=%2281746c04-09d9-4ca8-94f5-d477bb882c99%22;
		// REMEMBER=1ahb7befoe55i162lewfdvaouwaothg0vmkn941edqadvj1c1eke7zyphb7aw421irbbxsk0pdq9;
		// __uvt=; uvts=3l6GEHcUtIDsnGas; _gat=1;
		// AUTH=sdw6l9pfotvzcu9n1ku6cmjq1d7dzcb1c3ihzxok686xhazdf1sls9imyqam3q171vfmnbg654e");
		connection.setDoInput(true);
		connection.setDoOutput(false);
		connection.setUseCaches(false);

		// OutputStreamWriter writer = new OutputStreamWriter(
		// connection.getOutputStream() );
		// writer.write( body );
		// writer.flush();

		BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));

		String jsonText = "";
		for (String line; (line = reader.readLine()) != null;) {
			// System.out.println( line );
			jsonText = jsonText + line;
		}

		JSONParser parser = new JSONParser();
		List<String> result = new LinkedList<>();
		try {
			JSONObject obj = (JSONObject) parser.parse(jsonText);

			// Object obj2 = parser.parse(obj.get("results").toString());
			JSONArray array = (JSONArray) obj.get("results");
			for (int i = 0; i < array.size(); i++) {
				JSONObject obj1 = (JSONObject) array.get(i);
				result.add(obj1.get("hotelnameurl_link/_text") + " - " + obj1.get("invisibletitle_value") + " - "
						+ obj1.get("bigreviewind_link/_text") + " - Beschreibung: "
						+ obj1.get("hoteldesc_description"));
				System.out.println(obj1.get("hotelnameurl_link/_text") + " - " + obj1.get("invisibletitle_value")
						+ " - " + obj1.get("bigreviewind_link/_text") + " - Beschreibung: "
						+ obj1.get("hoteldesc_description"));
			}

		} catch (ParseException pe) {

			System.out.println("position: " + pe.getPosition());
			System.out.println(pe);
		}

		// writer.close();
		reader.close();


		JsonNode responseData = Json.toJson(result);
		return ok(responseData);
	}

	public Result getAvalancheRisk() throws IOException {

		URL url = new URL(
				"https://api.import.io/store/data/a9f04bc5-b0c7-4e92-b84b-87fe987afd9b/_query?input/webpage/url=http%3A%2F%2Fwww.bergfex.at%2Fkitzbuehel-kirchberg%2Fschneebericht%2F&_user=1cd7d171-f82d-4045-a7a6-4db9f3ebaaa9&_apikey=1cd7d171f82d4045a7a64db9f3ebaaa94cb03ebaa6044b7204eedc4e62554e475a241077ba892154bb6354580660793f09ef6b91f0d14f9f934e713416a96bf7d66e6983ddfa4d062b8fd7ba1e2c0c2f");
		HttpURLConnection connection = (HttpURLConnection) url.openConnection();
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
		List<String> result = new LinkedList<>();
        SkiArea skiArea = new SkiArea();
		try {
			JSONObject obj = (JSONObject) parser.parse(jsonText);



			// Object obj2 = parser.parse(obj.get("results").toString());
			JSONArray array = (JSONArray) obj.get("results");
			for (int i = 0; i < array.size(); i++) {
				JSONObject obj1 = (JSONObject) array.get(i);
//				result.add((String) obj1.get("lawinenstufe"));
//				result.add((String) obj1.get("schneehoehe"));
//				result.add((String) obj1.get("neuschnee"));
                skiArea.name="Kitzbühel";
                skiArea.avalancherisk = (String)obj1.get("lawinenstufe");
                skiArea.snowHeight=(String) obj1.get("schneehoehe");
                skiArea.newSnow= (String)obj1.get("neuschnee");
			}

		} catch (ParseException pe) {

			System.out.println("position: " + pe.getPosition());
			System.out.println(pe);
		}

		// writer.close();
		reader.close();

        JsonNode responseData = Json.toJson(skiArea);
        return ok(responseData);
	}

}
