var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PharmacyCount_1 = new ol.format.GeoJSON();
var features_PharmacyCount_1 = format_PharmacyCount_1.readFeatures(json_PharmacyCount_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PharmacyCount_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PharmacyCount_1.addFeatures(features_PharmacyCount_1);
var lyr_PharmacyCount_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PharmacyCount_1, 
                style: style_PharmacyCount_1,
                popuplayertitle: "Pharmacy Count",
                interactive: true,
    title: 'Pharmacy Count<br />\
    <img src="styles/legend/PharmacyCount_1_0.png" /> 0 - 2<br />\
    <img src="styles/legend/PharmacyCount_1_1.png" /> 2 - 6<br />\
    <img src="styles/legend/PharmacyCount_1_2.png" /> 6 - 11<br />\
    <img src="styles/legend/PharmacyCount_1_3.png" /> 11 - 19<br />\
    <img src="styles/legend/PharmacyCount_1_4.png" /> 19 - 37<br />'
        });
var format_GIS_county_boundary_2 = new ol.format.GeoJSON();
var features_GIS_county_boundary_2 = format_GIS_county_boundary_2.readFeatures(json_GIS_county_boundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GIS_county_boundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GIS_county_boundary_2.addFeatures(features_GIS_county_boundary_2);
var lyr_GIS_county_boundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GIS_county_boundary_2, 
                style: style_GIS_county_boundary_2,
                popuplayertitle: "GIS_county_boundary",
                interactive: false,
                title: '<img src="styles/legend/GIS_county_boundary_2.png" /> GIS_county_boundary'
            });
var format_Pharmacy_Greater_Houston_3 = new ol.format.GeoJSON();
var features_Pharmacy_Greater_Houston_3 = format_Pharmacy_Greater_Houston_3.readFeatures(json_Pharmacy_Greater_Houston_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pharmacy_Greater_Houston_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pharmacy_Greater_Houston_3.addFeatures(features_Pharmacy_Greater_Houston_3);
var lyr_Pharmacy_Greater_Houston_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pharmacy_Greater_Houston_3, 
                style: style_Pharmacy_Greater_Houston_3,
                popuplayertitle: "Pharmacy_Greater_Houston",
                interactive: true,
                title: '<img src="styles/legend/Pharmacy_Greater_Houston_3.png" /> Pharmacy_Greater_Houston'
            });

lyr_OSMStandard_0.setVisible(true);lyr_PharmacyCount_1.setVisible(true);lyr_GIS_county_boundary_2.setVisible(true);lyr_Pharmacy_Greater_Houston_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_PharmacyCount_1,lyr_GIS_county_boundary_2,lyr_Pharmacy_Greater_Houston_3];
lyr_PharmacyCount_1.set('fieldAliases', {'ZCTA5CE10': 'ZCTA5CE10', 'AFFGEOID10': 'AFFGEOID10', 'GEOID10': 'GEOID10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', 'zip_area': 'zip_area', 'CMPTRL_CNT': 'CMPTRL_CNT', 'DPS_CNTY_N': 'DPS_CNTY_N', 'FIPS_ST_CN': 'FIPS_ST_CN', 'TXDOT_CNTY': 'TXDOT_CNTY', 'TXDOT_DIST': 'TXDOT_DIST', 'CNTY_NM': 'CNTY_NM', 'GID': 'GID', 'Number of Pharmacies': 'Number of Pharmacies', 'Pharmacy access level(3)': 'Pharmacy access level(3)', 'Food access level(3)': 'Food access level(3)', 'Low pharmacy & Low food access': 'Low pharmacy & Low food access', });
lyr_GIS_county_boundary_2.set('fieldAliases', {'CMPTRL_CNT': 'CMPTRL_CNT', 'DPS_CNTY_N': 'DPS_CNTY_N', 'FIPS_ST_CN': 'FIPS_ST_CN', 'TXDOT_CNTY': 'TXDOT_CNTY', 'TXDOT_DIST': 'TXDOT_DIST', 'CNTY_NM': 'CNTY_NM', 'GID': 'GID', });
lyr_Pharmacy_Greater_Houston_3.set('fieldAliases', {'FID': 'FID', 'Shape *': 'Shape *', 'Lat': 'Lat', 'Long': 'Long', 'Name': 'Name', 'Address': 'Address', 'City': 'City', 'State': 'State', 'Zip': 'Zip', 'formated_p': 'formated_p', 'Status': 'Status', 'Icon': 'Icon', 'Type': 'Type', 'Abb': 'Abb', 'MUA': 'MUA', 'CMPTRL_CNT': 'CMPTRL_CNT', 'DPS_CNTY_N': 'DPS_CNTY_N', 'FIPS_ST_CN': 'FIPS_ST_CN', 'TXDOT_CNTY': 'TXDOT_CNTY', 'TXDOT_DIST': 'TXDOT_DIST', 'CNTY_NM': 'CNTY_NM', 'GID': 'GID', });
lyr_PharmacyCount_1.set('fieldImages', {'ZCTA5CE10': 'TextEdit', 'AFFGEOID10': 'TextEdit', 'GEOID10': 'TextEdit', 'ALAND10': 'TextEdit', 'AWATER10': 'TextEdit', 'zip_area': 'TextEdit', 'CMPTRL_CNT': 'TextEdit', 'DPS_CNTY_N': 'TextEdit', 'FIPS_ST_CN': 'TextEdit', 'TXDOT_CNTY': 'TextEdit', 'TXDOT_DIST': 'TextEdit', 'CNTY_NM': 'TextEdit', 'GID': 'TextEdit', 'Number of Pharmacies': 'Range', 'Pharmacy access level(3)': 'TextEdit', 'Food access level(3)': 'TextEdit', 'Low pharmacy & Low food access': 'CheckBox', });
lyr_GIS_county_boundary_2.set('fieldImages', {'CMPTRL_CNT': 'TextEdit', 'DPS_CNTY_N': 'TextEdit', 'FIPS_ST_CN': 'TextEdit', 'TXDOT_CNTY': 'TextEdit', 'TXDOT_DIST': 'TextEdit', 'CNTY_NM': 'TextEdit', 'GID': 'TextEdit', });
lyr_Pharmacy_Greater_Houston_3.set('fieldImages', {'FID': 'TextEdit', 'Shape *': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Name': 'TextEdit', 'Address': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Zip': 'TextEdit', 'formated_p': 'TextEdit', 'Status': 'TextEdit', 'Icon': 'TextEdit', 'Type': 'TextEdit', 'Abb': 'TextEdit', 'MUA': 'Range', 'CMPTRL_CNT': 'TextEdit', 'DPS_CNTY_N': 'TextEdit', 'FIPS_ST_CN': 'TextEdit', 'TXDOT_CNTY': 'TextEdit', 'TXDOT_DIST': 'TextEdit', 'CNTY_NM': 'TextEdit', 'GID': 'TextEdit', });
lyr_PharmacyCount_1.set('fieldLabels', {'ZCTA5CE10': 'inline label - visible with data', 'AFFGEOID10': 'hidden field', 'GEOID10': 'hidden field', 'ALAND10': 'hidden field', 'AWATER10': 'hidden field', 'zip_area': 'hidden field', 'CMPTRL_CNT': 'hidden field', 'DPS_CNTY_N': 'hidden field', 'FIPS_ST_CN': 'hidden field', 'TXDOT_CNTY': 'hidden field', 'TXDOT_DIST': 'hidden field', 'CNTY_NM': 'hidden field', 'GID': 'hidden field', 'Number of Pharmacies': 'inline label - visible with data', 'Pharmacy access level(3)': 'inline label - visible with data', 'Food access level(3)': 'inline label - visible with data', 'Low pharmacy & Low food access': 'inline label - always visible', });
lyr_GIS_county_boundary_2.set('fieldLabels', {'CMPTRL_CNT': 'hidden field', 'DPS_CNTY_N': 'hidden field', 'FIPS_ST_CN': 'hidden field', 'TXDOT_CNTY': 'hidden field', 'TXDOT_DIST': 'hidden field', 'CNTY_NM': 'hidden field', 'GID': 'hidden field', });
lyr_Pharmacy_Greater_Houston_3.set('fieldLabels', {'FID': 'hidden field', 'Shape *': 'hidden field', 'Lat': 'hidden field', 'Long': 'hidden field', 'Name': 'inline label - visible with data', 'Address': 'hidden field', 'City': 'hidden field', 'State': 'hidden field', 'Zip': 'inline label - visible with data', 'formated_p': 'hidden field', 'Status': 'hidden field', 'Icon': 'hidden field', 'Type': 'hidden field', 'Abb': 'hidden field', 'MUA': 'hidden field', 'CMPTRL_CNT': 'hidden field', 'DPS_CNTY_N': 'hidden field', 'FIPS_ST_CN': 'hidden field', 'TXDOT_CNTY': 'hidden field', 'TXDOT_DIST': 'hidden field', 'CNTY_NM': 'hidden field', 'GID': 'hidden field', });
lyr_Pharmacy_Greater_Houston_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});