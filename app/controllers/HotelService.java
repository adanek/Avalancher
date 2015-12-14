package controllers;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.Callable;

import models.HotelInfo;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import play.libs.Json;

import com.fasterxml.jackson.databind.JsonNode;

public class HotelService implements Callable<JsonNode> {

	private String city;

	public HotelService(String city) {
		this.city = city;
	}

	@Override
	public JsonNode call() throws Exception {

		URL url = getURL(city);
		HttpURLConnection connection = (HttpURLConnection) url.openConnection();
		connection.setRequestMethod("GET");
		connection.setRequestProperty("Accept", "application/json");
		connection.setDoInput(true);
		connection.setDoOutput(false);
		connection.setUseCaches(false);

		BufferedReader reader = new BufferedReader(new InputStreamReader(
				connection.getInputStream()));

		String jsonText = "";
		for (String line; (line = reader.readLine()) != null;) {
			jsonText = jsonText + line;
		}

		JSONParser parser = new JSONParser();
		List<String> result = new LinkedList<>();
		List<HotelInfo> hotels = new ArrayList<>();
		try {
			JSONObject obj = (JSONObject) parser.parse(jsonText);
			JSONArray jsonAllHotels = (JSONArray) obj.get("results");
			for (int i = 0; i < jsonAllHotels.size(); i++) {
				JSONObject jsonHotel = (JSONObject) jsonAllHotels.get(i);
				HotelInfo hotel = new HotelInfo();
				hotel.name = (String) jsonHotel.get("name");
				hotel.location = (String) jsonHotel.get("city");
				hotel.stars = (String) jsonHotel.get("stars");
				hotel.rating = (String) jsonHotel.get("rating");
				hotel.ratingDescription = (String) jsonHotel
						.get("rating_description");
				hotel.price = (String) jsonHotel.get("price");
				hotel.image = (String) jsonHotel.get("picture_link");
				hotel.url = "http://www.booking.com/";
				hotel.url = hotel.url + (String) jsonHotel.get("link/_source");
				hotel.description = (String) jsonHotel.get("description");

				hotels.add(hotel);
			}

		} catch (ParseException pe) {

			System.out.println("position: " + pe.getPosition());
			System.out.println(pe);
		}

		reader.close();

		JsonNode responseData = Json.toJson(hotels);
		return responseData;
	}

	private URL getURL(String city) {
		String url = "";
		switch (city) {
		case "Innsbruck":
			url = "https://api.import.io/store/connector/385da418-94f7-4f21-8fd4-d8013f1e899f/_query?input=webpage/url:http%3A%2F%2Fwww.booking.com%2Fsearchresults.de.html%3Fsrc%3Dsearchresults%26city%3D-1981445%26ssne%3DInnsbruck%26ssne_untouched%3DInnsbruck%26error_url%3Dhttp%253A%252F%252Fwww.booking.com%252Fsearchresults.de.html%253Flabel%253Dgen173nr-15CAEoggJCAlhYSDNiBW5vcmVmaA6IAQGYAQe4AQTIAQTYAQPoAQE%253Bsid%253D4fac978bef28eab2213548375c6753e8%253Bdcid%253D4%253Bcity%253D-1983428%253Bclass_interval%253D1%253Bcsflt%253D%25257B%25257D%253Bdest_id%253D-1981445%253Bdest_type%253Dcity%253Bdtdisc%253D0%253Bgroup_adults%253D2%253Bgroup_children%253D0%253Bhlrd%253D0%253Bhyb_red%253D0%253Bidf%253D1%253Binac%253D0%253Blabel_click%253Dundef%253Bnha_red%253D0%253Bno_rooms%253D1%253Boffset%253D0%253Boffset_unavail%253D1%253Bredirected_from_city%253D0%253Bredirected_from_landmark%253D0%253Bredirected_from_region%253D0%253Breview_score_group%253Dempty%253Broom1%253DA%25252CA%253Bsb_price_type%253Dtotal%253Bscore_min%253D0%253Bsi%253Dai%25252Cco%25252Cci%25252Cre%25252Cdi%253Bsrc%253Dsearchresults%253Bss%253DInnsbruck%25252C%252520Tirol%25252C%252520%2525C3%252596sterreich%253Bss_all%253D0%253Bss_raw%253DInnsbruck%253Bssb%253Dempty%253Bsshis%253D0%253Bssne_untouched%253DK%2525C3%2525BChtai%2526%253B%26dcid%3D4%26label%3Dgen173nr-15CAEoggJCAlhYSDNiBW5vcmVmaA6IAQGYAQe4AQTIAQTYAQPoAQE%26sid%3D4fac978bef28eab2213548375c6753e8%26si%3Dai%252Cco%252Cci%252Cre%252Cdi%26ss%3DInnsbruck%26checkin_monthday%3D0%26checkin_year_month%3D0%26checkout_monthday%3D0%26checkout_year_month%3D0%26idf%3Don%26room1%3DA%252CA%26no_rooms%3D1%26group_adults%3D2%26group_children%3D0%26highlighted_hotels%3D%26highlighted_hotels%3D%26dest_type%3Dcity%26dest_id%3D-1981445%23&&_apikey=1dbdc05e38134478bc009e49135be330fca7a71e7ee46bc515674cfeb0eb50ba15d9b37e0b020e7580239f665577b6926134b5afcd98de12b09aaf4130bee7fc59700445a5c65420972c184285ed9e45";
			break;
		case "Axams":
			url = "https://api.import.io/store/connector/76c248a2-5c2b-4cc6-9bb7-702a39f4576b/_query?input=webpage/url:http%3A%2F%2Fwww.booking.com%2Fsearchresults.de.html%3Fsrc%3Dindex%26nflt%3D%26error_url%3Dhttp%253A%252F%252Fwww.booking.com%252Findex.de.html%253Flabel%253Dgen173nr-15CAEoggJCAlhYSDNiBW5vcmVmaA6IAQGYAQe4AQTIAQTYAQPoAQE%253Bsid%253D4fac978bef28eab2213548375c6753e8%253Bdcid%253D4%253Bbb_ltbi%253D0%253Bsb_price_type%253Dtotal%2526%253B%26dcid%3D4%26label%3Dgen173nr-15CAEoggJCAlhYSDNiBW5vcmVmaA6IAQGYAQe4AQTIAQTYAQPoAQE%26sid%3D4fac978bef28eab2213548375c6753e8%26si%3Dai%252Cco%252Cci%252Cre%252Cdi%26ss%3DAxams%252C%2BTirol%252C%2B%25C3%2596sterreich%26idf%3Don%26room1%3DA%252CA%26no_rooms%3D1%26group_adults%3D2%26group_children%3D0%26ac_pageview_id%3D8f5a9015b79000cd%26dest_id%3D-1974454%26dest_type%3Dcity%26ac_position%3D0%26ac_langcode%3Dde%26ss_raw%3DAxams%26ac_suggestion_list_length%3D2&&_apikey=1dbdc05e38134478bc009e49135be330fca7a71e7ee46bc515674cfeb0eb50ba15d9b37e0b020e7580239f665577b6926134b5afcd98de12b09aaf4130bee7fc59700445a5c65420972c184285ed9e45";
			break;
		case "Seefeld":
			url = "https://api.import.io/store/connector/8dd771d3-c447-42e4-ae69-4493ee7784d6/_query?input=webpage/url:http%3A%2F%2Fwww.booking.com%2Fsearchresults.de.html%3Fsrc%3Dindex%26nflt%3D%26error_url%3Dhttp%253A%252F%252Fwww.booking.com%252Findex.de.html%253Flabel%253Dgen173bo-15CAEoggJCAlhYSDNYA2gOiAEBmAEHuAEEyAEE2AED6AEBmAIC%253Bsid%253D4fac978bef28eab2213548375c6753e8%253Bdcid%253D4%253Bbb_ltbi%253D0%253Bsb_price_type%253Dtotal%2526%253B%26dcid%3D4%26label%3Dgen173bo-15CAEoggJCAlhYSDNYA2gOiAEBmAEHuAEEyAEE2AED6AEBmAIC%26sid%3D4fac978bef28eab2213548375c6753e8%26si%3Dai%252Cco%252Cci%252Cre%252Cdi%26ss%3DSeefeld%252C%2B%25C3%2596sterreich%26room1%3DA%252CA%26no_rooms%3D1%26group_adults%3D2%26group_children%3D0%26ac_pageview_id%3D83e691f8cfd20057%26dest_id%3D4004%26dest_type%3Dregion%26ac_position%3D1%26ac_langcode%3Dde%26ss_raw%3DSeefeld%26ac_suggestion_list_length%3D5&&_apikey=1dbdc05e38134478bc009e49135be330fca7a71e7ee46bc515674cfeb0eb50ba15d9b37e0b020e7580239f665577b6926134b5afcd98de12b09aaf4130bee7fc59700445a5c65420972c184285ed9e45";
			break;
		case "Kitzbuehel":
			url = "https://api.import.io/store/connector/eaf58f04-bd0d-451e-85c4-df8305b49056/_query?input=webpage/url:http%3A%2F%2Fwww.booking.com%2Fsearchresults.de.html%3Fsrc%3Dindex%26nflt%3D%26error_url%3Dhttp%253A%252F%252Fwww.booking.com%252Findex.de.html%253Flabel%253Dgen173bo-15CAEoggJCAlhYSDNYA2gOiAEBmAEHuAEEyAEE2AED6AEBmAIC%253Bsid%253D4fac978bef28eab2213548375c6753e8%253Bdcid%253D4%253Bbb_ltbi%253D0%253Bsb_price_type%253Dtotal%2526%253B%26dcid%3D4%26label%3Dgen173bo-15CAEoggJCAlhYSDNYA2gOiAEBmAEHuAEEyAEE2AED6AEBmAIC%26sid%3D4fac978bef28eab2213548375c6753e8%26si%3Dai%252Cco%252Cci%252Cre%252Cdi%26ss%3DKitzb%25C3%25BChel%252C%2BTirol%252C%2B%25C3%2596sterreich%26room1%3DA%252CA%26no_rooms%3D1%26group_adults%3D2%26group_children%3D0%26ac_pageview_id%3D74ff72b821ab00cd%26ss_raw%3DKitzb%25C3%25BChel%26dest_id%3D-1982333%26dest_type%3Dcity%26ac_position%3D0%26ac_langcode%3Dde%26ac_suggestion_list_length%3D5&&_apikey=1dbdc05e38134478bc009e49135be330fca7a71e7ee46bc515674cfeb0eb50ba15d9b37e0b020e7580239f665577b6926134b5afcd98de12b09aaf4130bee7fc59700445a5c65420972c184285ed9e45";
			break;
		case "Tulfes":
			url = "https://api.import.io/store/connector/ae84fcb8-a2ec-4227-b75d-6fb4755b3d32/_query?input=webpage/url:http%3A%2F%2Fwww.booking.com%2Fsearchresults.de.html%3Fsrc%3Dindex%26nflt%3D%26error_url%3Dhttp%253A%252F%252Fwww.booking.com%252Findex.de.html%253Flabel%253Dgen173bo-15CAEoggJCAlhYSDNYA2gOiAEBmAEHuAEEyAEE2AED6AEBmAIC%253Bsid%253D4fac978bef28eab2213548375c6753e8%253Bdcid%253D4%253Bbb_ltbi%253D0%253Bsb_price_type%253Dtotal%2526%253B%26dcid%3D4%26label%3Dgen173bo-15CAEoggJCAlhYSDNYA2gOiAEBmAEHuAEEyAEE2AED6AEBmAIC%26sid%3D4fac978bef28eab2213548375c6753e8%26si%3Dai%252Cco%252Cci%252Cre%252Cdi%26ss%3DTulfes%252C%2BTirol%252C%2B%25C3%2596sterreich%26room1%3DA%252CA%26no_rooms%3D1%26group_adults%3D2%26group_children%3D0%26ac_pageview_id%3D5423738ab4990357%26ss_raw%3DTulfes%26dest_id%3D-1993585%26dest_type%3Dcity%26ac_position%3D0%26ac_langcode%3Dde%26ac_suggestion_list_length%3D5&&_apikey=1dbdc05e38134478bc009e49135be330fca7a71e7ee46bc515674cfeb0eb50ba15d9b37e0b020e7580239f665577b6926134b5afcd98de12b09aaf4130bee7fc59700445a5c65420972c184285ed9e45";
			break;
		case "Pitztal":
			url = "https://api.import.io/store/connector/dbad786a-24fe-4b5e-ad85-e135913fa02b/_query?input=webpage/url:http%3A%2F%2Fwww.booking.com%2Fsearchresults.de.html%3Fsrc%3Dindex%26nflt%3D%26error_url%3Dhttp%253A%252F%252Fwww.booking.com%252Findex.de.html%253Flabel%253Dgen173bo-15CAEoggJCAlhYSDNYA2gOiAEBmAEHuAEEyAEE2AED6AEBmAIC%253Bsid%253D4fac978bef28eab2213548375c6753e8%253Bdcid%253D4%253Bbb_ltbi%253D0%253Bsb_price_type%253Dtotal%2526%253B%26dcid%3D4%26label%3Dgen173bo-15CAEoggJCAlhYSDNYA2gOiAEBmAEHuAEEyAEE2AED6AEBmAIC%26sid%3D4fac978bef28eab2213548375c6753e8%26si%3Dai%252Cco%252Cci%252Cre%252Cdi%26ss%3DPitztal%252C%2B%25C3%2596sterreich%26room1%3DA%252CA%26no_rooms%3D1%26group_adults%3D2%26group_children%3D0%26ac_pageview_id%3D9eb473c6d5f503af%26ss_raw%3DPitztal%26dest_id%3D1750%26dest_type%3Dregion%26ac_position%3D0%26ac_langcode%3Dde%26ac_suggestion_list_length%3D5&&_apikey=1dbdc05e38134478bc009e49135be330fca7a71e7ee46bc515674cfeb0eb50ba15d9b37e0b020e7580239f665577b6926134b5afcd98de12b09aaf4130bee7fc59700445a5c65420972c184285ed9e45";
			break;
		case "Kuehtai":
			url = "https://api.import.io/store/connector/11910efc-2162-449e-bc33-e4a72c02a590/_query?input=webpage/url:http%3A%2F%2Fwww.booking.com%2Fsearchresults.de.html%3Fsrc%3Dindex%26nflt%3D%26error_url%3Dhttp%253A%252F%252Fwww.booking.com%252Findex.de.html%253Flabel%253Dgen173bo-15CAEoggJCAlhYSDNYA2gOiAEBmAEHuAEEyAEE2AED6AEBmAIC%253Bsid%253D4fac978bef28eab2213548375c6753e8%253Bdcid%253D4%253Bbb_ltbi%253D0%253Bsb_price_type%253Dtotal%2526%253B%26dcid%3D4%26label%3Dgen173bo-15CAEoggJCAlhYSDNYA2gOiAEBmAEHuAEEyAEE2AED6AEBmAIC%26sid%3D4fac978bef28eab2213548375c6753e8%26si%3Dai%252Cco%252Cci%252Cre%252Cdi%26ss%3DK%25C3%25BChtai%252C%2BTirol%252C%2B%25C3%2596sterreich%26room1%3DA%252CA%26no_rooms%3D1%26group_adults%3D2%26group_children%3D0%26ac_pageview_id%3Dcb6e741cb9890108%26ss_raw%3DK%25C3%25BChtai%26dest_id%3D-1983428%26dest_type%3Dcity%26ac_position%3D0%26ac_langcode%3Dde%26ac_suggestion_list_length%3D5&&_apikey=1dbdc05e38134478bc009e49135be330fca7a71e7ee46bc515674cfeb0eb50ba15d9b37e0b020e7580239f665577b6926134b5afcd98de12b09aaf4130bee7fc59700445a5c65420972c184285ed9e45";
			break;
		case "Neustift":
			url = "https://api.import.io/store/connector/c5035b83-c32b-4dcc-bf2f-12156704afba/_query?input=webpage/url:http%3A%2F%2Fwww.booking.com%2Fsearchresults.de.html%3Fsrc%3Dindex%26nflt%3D%26error_url%3Dhttp%253A%252F%252Fwww.booking.com%252Findex.de.html%253Flabel%253Dgen173bo-15CAEoggJCAlhYSDNYA2gOiAEBmAEHuAEEyAEE2AED6AEBmAIC%253Bsid%253D4fac978bef28eab2213548375c6753e8%253Bdcid%253D4%253Bbb_ltbi%253D0%253Bsb_price_type%253Dtotal%2526%253B%26dcid%3D4%26label%3Dgen173bo-15CAEoggJCAlhYSDNYA2gOiAEBmAEHuAEEyAEE2AED6AEBmAIC%26sid%3D4fac978bef28eab2213548375c6753e8%26si%3Dai%252Cco%252Cci%252Cre%252Cdi%26ss%3DNeustift%2Bim%2BStubaital%252C%2BTirol%252C%2B%25C3%2596sterreich%26room1%3DA%252CA%26no_rooms%3D1%26group_adults%3D2%26group_children%3D0%26ac_pageview_id%3D669f4645a89b036a%26ss_raw%3DNeustif%26dest_id%3D-1986096%26dest_type%3Dcity%26ac_position%3D0%26ac_langcode%3Dde%26ac_suggestion_list_length%3D5&&_apikey=1dbdc05e38134478bc009e49135be330fca7a71e7ee46bc515674cfeb0eb50ba15d9b37e0b020e7580239f665577b6926134b5afcd98de12b09aaf4130bee7fc59700445a5c65420972c184285ed9e45";
			break;
		case "Innsbruck Igls":
			url = "https://api.import.io/store/connector/a3b67796-9508-4e9c-9a9f-ae2db733fee7/_query?input=webpage/url:http%3A%2F%2Fwww.booking.com%2Fsearchresults.de.html%3Fsrc%3Dindex%26nflt%3D%26error_url%3Dhttp%253A%252F%252Fwww.booking.com%252Findex.de.html%253Flabel%253Dgen173bo-15CAEoggJCAlhYSDNYA2gOiAEBmAEHuAEEyAEE2AED6AEBmAIC%253Bsid%253D4fac978bef28eab2213548375c6753e8%253Bdcid%253D4%253Bbb_ltbi%253D0%253Bsb_price_type%253Dtotal%2526%253B%26dcid%3D4%26label%3Dgen173bo-15CAEoggJCAlhYSDNYA2gOiAEBmAEHuAEEyAEE2AED6AEBmAIC%26sid%3D4fac978bef28eab2213548375c6753e8%26si%3Dai%252Cco%252Cci%252Cre%252Cdi%26ss%3DPatscherkofelbahn%2B1%252C%2BInnsbruck%252C%2BTirol%252C%2B%25C3%2596sterreich%26room1%3DA%252CA%26no_rooms%3D1%26group_adults%3D2%26group_children%3D0%26ac_pageview_id%3D826c49c9d9150294%26ss_raw%3Dpatscherko%26dest_id%3D251586%26dest_type%3Dlandmark%26ac_position%3D0%26ac_langcode%3Dde%26ac_suggestion_list_length%3D2&&_apikey=1dbdc05e38134478bc009e49135be330fca7a71e7ee46bc515674cfeb0eb50ba15d9b37e0b020e7580239f665577b6926134b5afcd98de12b09aaf4130bee7fc59700445a5c65420972c184285ed9e45";
			break;
		}
		try {
			return (new URL(url));
		} catch (MalformedURLException e) {
			e.printStackTrace();
			return null;
		}
	}

}
