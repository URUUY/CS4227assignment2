package com.example.helloworld.config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.lang.NonNull;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
@Configuration
public class CorsConfig {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(@NonNull CorsRegistry registry) { // 添加 @NonNull 注解
                registry.addMapping("/api/**") // 允许所有 API 路径
                        .allowedOrigins("http://localhost:3000") // 允许前端地址
                        .allowedMethods("GET", "POST", "PUT", "DELETE"); // 允许的 HTTP 方法
            }
        };
    }
}