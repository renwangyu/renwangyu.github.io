function animacja_trawy() {
  if (tr.length < 2) {
   for (i=0; i<width; i+= Math.random()*100) {
         tr.push({x:i+Math.random()*20-50,
                    y:-200-Math.random()*50,
          s:Math.random()*100+30,
          w:Math.random()*150+150,
          obr:Math.random()*0.3+0.1,
          ampl_obr:Math.random()*10+20,
          v_obr:0.1,
          l:Math.random()*10,
     });

   }
 }
 else {
   for (i = 0; i < tr.length; i++) {
     var trw = tr[i];
     trw.l += trw.v_obr;
     ct_tr.save();
     ct_tr.translate(trw.x, height + 30);
     ct_tr.rotate(Math.sin(trw.l) / trw.ampl_obr+trw.obr);
     ct_tr.drawImage(ob_tr, 0, -trw.w+30, trw.s, trw.w);
     ct_tr.restore();
   }
 }
};