package hr.stiven.eracunplus.utils;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Component;

@Component
public class DataTableUtils {
	
	//TODO ove mape se posebno stavljaju al pošto se tu u jednom upitu koriste bude ok
	public String mapSortColumn(String columnName){
		Map<String, String> sortMap = new HashMap<String, String>();
		sortMap.put("id", "id");
		sortMap.put("brojRacuna", "brojRacuna");
		sortMap.put("datumIzdavanja", "datumIzdavanja");
		sortMap.put("rokPlacanja", "rokPlacanja");
		sortMap.put("valuta", "valuta");
		sortMap.put("nazivIzdavatelja", "izdavatelj.nazivTvrtke");
		sortMap.put("nazivPrimatelja", "primatelj.nazivTvrtke");
		return sortMap.get(columnName);
	}
}
