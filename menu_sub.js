function mmLoadMenus() {
  if (window.mm_menu_0411113055_0) return;
          window.mm_menu_0411113055_0 = new Menu("root",180,15,"Verdana, Arial, Helvetica, sans-serif",11,"#666666","#666666","#F6F6F6","#CCCCCC","left","middle",2,0,1000,-5,7,true,true,true,0,false,true);
  mm_menu_0411113055_0.addMenuItem("New&nbsp;Hire&nbsp;Training","location='nhst.html'");
  mm_menu_0411113055_0.addMenuItem("Integration&nbsp;University","location='iu.html'");
  mm_menu_0411113055_0.addMenuItem("Professional&nbsp;Presentation","location='pp.html'");
  mm_menu_0411113055_0.addMenuItem("Target&nbsp;Account&nbsp;Selling","location='tas.html'");
  mm_menu_0411113055_0.addMenuItem("Enterprise&nbsp;Selling&nbsp;Process","location='esp.html'");
   mm_menu_0411113055_0.hideOnMouseOut=true;
   mm_menu_0411113055_0.bgColor='#666666';
   mm_menu_0411113055_0.menuBorder=1;
   mm_menu_0411113055_0.menuLiteBgColor='#FFFFFF';
   mm_menu_0411113055_0.menuBorderBgColor='#666666';
window.mm_menu_0411151449_0 = new Menu("root",222,15,"Verdana, Arial, Helvetica, sans-serif",11,"#666666","#666666","#F6F6F6","#CCCCCC","left","middle",2,0,1000,-5,7,true,true,true,0,false,true);
  mm_menu_0411151449_0.addMenuItem("New&nbsp;Hire&nbsp;Certification","location='nhstcer.html'");
  mm_menu_0411151449_0.addMenuItem("Integration&nbsp;University&nbsp;Certification","location='iucer.html'");
  mm_menu_0411151449_0.addMenuItem("Professional&nbsp;Presentation&nbsp;Certification","location='ppcer.html'");
  mm_menu_0411151449_0.addMenuItem("Sales&nbsp;Certification","location='sales.html'");
  mm_menu_0411151449_0.addMenuItem("SE&nbsp;Certification","location='se.html'");
   mm_menu_0411151449_0.hideOnMouseOut=true;
   mm_menu_0411151449_0.bgColor='#666666';
   mm_menu_0411151449_0.menuBorder=1;
   mm_menu_0411151449_0.menuLiteBgColor='#FFFFFF';
   mm_menu_0411151449_0.menuBorderBgColor='#666666';

    window.mm_menu_0411162509_0 = new Menu("root",232,15,"Verdana, Arial, Helvetica, sans-serif",11,"#666666","#666666","#F6F6F6","#CCCCCC","left","middle",2,0,1000,-5,7,true,true,true,0,false,true);
  mm_menu_0411162509_0.addMenuItem("Enterprise&nbsp;Integration&nbsp;Workshop","location='eiw.html'");
  mm_menu_0411162509_0.addMenuItem("Enterprise&nbsp;Information&nbsp;Portal&nbsp;Workshop","location='eipw.html'");
   mm_menu_0411162509_0.hideOnMouseOut=true;
   mm_menu_0411162509_0.bgColor='#666666';
   mm_menu_0411162509_0.menuBorder=1;
   mm_menu_0411162509_0.menuLiteBgColor='#FFFFFF';
   mm_menu_0411162509_0.menuBorderBgColor='#666666';

mm_menu_0411162509_0.writeMenus();
} // mmLoadMenus()
<!--
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}