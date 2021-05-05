/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 *
 * @author alber
 */
public class DAO { 
    
    public HashMap<String, List<String>> salvataggi = new HashMap<String, List<String>>();
    public int n = 1;
    
    public void Salva(List array){
        salvataggi.put("Salvataggio " + n, array);
        n++;
    }
    
    public void Ripristina(){
        salvataggi.clear();
    }
    
}
