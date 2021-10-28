package com.anik.ipldashboard;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;

@SpringBootApplication
public class IplDashboardApplication {

	public static void main(String[] args) {
		//SpringApplication.run(IplDashboardApplication.class, args);
		SpringApplicationBuilder builder = new SpringApplicationBuilder(IplDashboardApplication.class);
		builder.headless(false);
		builder.run(args);
	}

}
