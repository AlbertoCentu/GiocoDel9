package controller;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.beans.factory.annotation.Autowired;

import dao.*;
import java.util.ArrayList;
import java.util.List;
//import javax.persistence.Tuple;
import org.springframework.beans.factory.annotation.Qualifier;
import static org.springframework.core.convert.TypeDescriptor.array;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author ptom
 */
@RestController
public class ControllerMultiMap {

    //private HelloService helloService;
    @Autowired
    @Qualifier("daoManager")
    private DAO daoManager;
    

    @RequestMapping(value = "/Salva.htm", method = RequestMethod.GET,
            produces = "application/json;charset=UTF-8")
    @ResponseBody
    public void Salva(HttpServletRequest request) {
        String val = request.getParameter("parametro");
        List<String> ls = new ArrayList();
        for (int i = 0; i < val.length(); i++){
            ls.add(val.substring(i));
        }
        daoManager.Salva(ls);
    };
    
    @RequestMapping(value = "/Ripristina.htm", method = RequestMethod.GET,
            produces = "application/json;charset=UTF-8")
    @ResponseBody
    public void Ripristina(HttpServletRequest request) {
        daoManager.Ripristina();
    }
}
