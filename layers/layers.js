var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_1 = format_ADMINISTRASIKECAMATAN_AR_50K_1.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_1);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_1,
                interactive: true,
    title: 'ADMINISTRASIKECAMATAN_AR_50K<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_0.png" /> BUMIWARAS<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_1.png" /> ENGGAL<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_2.png" /> GEDONGTATAAN<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_3.png" /> JATIAGUNG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_4.png" /> KATIBUNG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_5.png" /> KEDAMAIAN<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_6.png" /> KEDATON<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_7.png" /> KEMILING<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_8.png" /> LABUHANRATU<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_9.png" /> LANGKAPURA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_10.png" /> MERBAUMATARAM<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_11.png" /> NATAR<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_12.png" /> PADANGCERMIN<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_13.png" /> PANJANG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_14.png" /> RAJABASA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_15.png" /> SUKABUMI<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_16.png" /> SUKARAME<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_17.png" /> TANJUNGBINTANG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_18.png" /> TANJUNGKARANG BARAT<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_19.png" /> TANJUNGKARANG PUSAT<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_20.png" /> TANJUNGKARANG TIMUR<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_21.png" /> TANJUNGSENANG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_22.png" /> TELUKBETUNG BARAT<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_23.png" /> TELUKBETUNG SELATAN<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_24.png" /> TELUKBETUNG TIMUR<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_25.png" /> TELUKBETUNG UTARA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_26.png" /> WAYHALIM<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_27.png" /> WAYLIMA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_28.png" /> <br />'
        });
var format_a_2 = new ol.format.GeoJSON();
var features_a_2 = format_a_2.readFeatures(json_a_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_a_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_a_2.addFeatures(features_a_2);
var lyr_a_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_a_2, 
                style: style_a_2,
                interactive: true,
                title: '<img src="styles/legend/a_2.png" /> a'
            });
var format_bb_3 = new ol.format.GeoJSON();
var features_bb_3 = format_bb_3.readFeatures(json_bb_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bb_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bb_3.addFeatures(features_bb_3);
var lyr_bb_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bb_3, 
                style: style_bb_3,
                interactive: true,
                title: '<img src="styles/legend/bb_3.png" /> bb'
            });
var format_line_4 = new ol.format.GeoJSON();
var features_line_4 = format_line_4.readFeatures(json_line_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_line_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_line_4.addFeatures(features_line_4);
var lyr_line_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_line_4, 
                style: style_line_4,
                interactive: true,
                title: '<img src="styles/legend/line_4.png" /> line'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ADMINISTRASIKECAMATAN_AR_50K_1.setVisible(true);lyr_a_2.setVisible(true);lyr_bb_3.setVisible(true);lyr_line_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ADMINISTRASIKECAMATAN_AR_50K_1,lyr_a_2,lyr_bb_3,lyr_line_4];
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'LCODE': 'LCODE', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_a_2.set('fieldAliases', {'fid': 'fid', 'rumah sakit': 'rumah sakit', });
lyr_bb_3.set('fieldAliases', {'fid': 'fid', 'pusat covid': 'pusat covid', });
lyr_line_4.set('fieldAliases', {'fid': 'fid', 'jalur kereta': 'jalur kereta', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldImages', {'NAMOBJ': '', 'REMARK': '', 'LCODE': '', 'WADMKK': '', 'WADMPR': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_a_2.set('fieldImages', {'fid': '', 'rumah sakit': '', });
lyr_bb_3.set('fieldImages', {'fid': '', 'pusat covid': '', });
lyr_line_4.set('fieldImages', {'fid': '', 'jalur kereta': '', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldLabels', {'NAMOBJ': 'header label', 'REMARK': 'no label', 'LCODE': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_a_2.set('fieldLabels', {'fid': 'no label', 'rumah sakit': 'inline label', });
lyr_bb_3.set('fieldLabels', {'fid': 'no label', 'pusat covid': 'inline label', });
lyr_line_4.set('fieldLabels', {'fid': 'no label', 'jalur kereta': 'inline label', });
lyr_line_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});