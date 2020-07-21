package petstore

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class EnterPetstore extends Simulation {

	val httpProtocol = http
		.baseUrl("https://petstore.octoperf.com")
		.acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("en-US,en;q=0.9")
		.upgradeInsecureRequestsHeader("1")
		.userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36")

	val headers_0 = Map(
		"cache-control" -> "max-age=0",
		"if-modified-since" -> "Tue, 16 Jun 2020 15:01:08 GMT",
		"if-none-match" -> """W/"1155-1592319668000"""",
		"sec-fetch-dest" -> "document",
		"sec-fetch-mode" -> "navigate",
		"sec-fetch-site" -> "none",
		"sec-fetch-user" -> "?1")

	val headers_1 = Map(
		"sec-fetch-dest" -> "document",
		"sec-fetch-mode" -> "navigate",
		"sec-fetch-site" -> "same-origin",
		"sec-fetch-user" -> "?1")



	val scn = scenario("EnterPetstore")
		.exec(http("request_0")
			.get("/")
			.headers(headers_0))
		.pause(12)
		.exec(http("request_1")
			.get("/actions/Catalog.action")
			.headers(headers_1))

	setUp(scn.inject(atOnceUsers(1))).protocols(httpProtocol)
}