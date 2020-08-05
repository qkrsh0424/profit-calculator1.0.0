package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RoutingContoller {
    @GetMapping("/")
    public String home(){
        return "views/index";
    }

    @GetMapping("/margin/dashboard")
    public String marginDashboard(){
        return "views/margin/dashboard";
    }

    @GetMapping("/rank/naver")
    public String rankingNaverDashboard(){
        return "views/rank/naver/dashboard";
    }
}