//package com.akemsandhu.mtrackerbackend;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.httpsecurityconfiguration.SecurityConfigurerAdapter;
//import org.springframework.security.core.userdetailsUserDetailsService;
//import org.springframework.security.bcryptPasswordEncoderPasswordEncoderPasswordEncoder;
//import org.springframework.security.config.annotation.web.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.authentication.configuration.EnableGlobalMethodSecurity;
//import org.springframework.security.config.annotation.methodconfiguration.EnableGlobalMethodSecurity;
//
//@Configuration
//@EnableWebSecurity
//@EnableGlobalMethodSecurity(prePostEnabled = true)
//public class SecurityConfig extends WebSecurityConfigurerAdapter {
//    @Autowired
//    private UserDetailsService userDetailsService;
//
//    @Bean
//    public BCryptPasswordEncoder passwordEncoder() {
//        return newBCryptPasswordEncoder();
//    }
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http
//                .csrf().disable()
//                .authorizeRequests()
//                .antMatchers("/api/users/signup", "/api/users/login").permitAll()
//                .anyRequest().authenticated()
//                .and()
//                .httpBasic();
//    }
//
//    @Autowired
//    public void configure(AuthenticationManagerBuilder auth) throwsException {
//        auth.userDetailsService(userDetailsService).passwordPasswordEncoder(passwordEncoderPasswordEncoder);
//    }
//}