var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRISatelliteArcGISWorld_Imagery_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_BallaratNorthCoreAreaLanduseplan_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Ballarat North Core Area Land use plan",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BallaratNorthCoreAreaLanduseplan_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16008418.823833, -4511695.540606, 16012901.462253, -4507917.138232]
                            })
                        });
var lyr_GrangeMasterplan_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Grange Masterplan",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/GrangeMasterplan_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16011688.082200, -4511733.982300, 16012903.173800, -4510151.399600]
                            })
                        });
var format_ParcelAttributes_4 = new ol.format.GeoJSON();
var features_ParcelAttributes_4 = format_ParcelAttributes_4.readFeatures(json_ParcelAttributes_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParcelAttributes_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParcelAttributes_4.addFeatures(features_ParcelAttributes_4);
var lyr_ParcelAttributes_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParcelAttributes_4, 
                style: style_ParcelAttributes_4,
                popuplayertitle: "Parcel Attributes",
                interactive: true,
                title: '<img src="styles/legend/ParcelAttributes_4.png" /> Parcel Attributes'
            });
var group_AdministrativeBoundaries = new ol.layer.Group({
                                layers: [lyr_ParcelAttributes_4,],
                                fold: "open",
                                title: "Administrative Boundaries"});
var group_Plans = new ol.layer.Group({
                                layers: [lyr_BallaratNorthCoreAreaLanduseplan_2,lyr_GrangeMasterplan_3,],
                                fold: "open",
                                title: "Plans"});
var group_BaseLayer = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_ESRISatelliteArcGISWorld_Imagery_1,],
                                fold: "open",
                                title: "Base Layer"});

lyr_GoogleMaps_0.setVisible(true);lyr_ESRISatelliteArcGISWorld_Imagery_1.setVisible(true);lyr_BallaratNorthCoreAreaLanduseplan_2.setVisible(false);lyr_GrangeMasterplan_3.setVisible(false);lyr_ParcelAttributes_4.setVisible(true);
var layersList = [group_BaseLayer,group_Plans,group_AdministrativeBoundaries];
lyr_ParcelAttributes_4.set('fieldAliases', {'fid': 'fid', 'Unique ID': 'Unique ID', 'Address': 'Address', 'Strategy': 'Strategy', 'Strategy Link': 'Strategy Link', 'PSP Status': 'PSP Status', 'Zoned / Rezone': 'Zoned / Rezone', 'Primary Product': 'Primary Product', 'Suburb': 'Suburb', 'Gross HA': 'Gross HA', 'NDH': 'NDH', 'Last Sold Price': 'Last Sold Price', 'Last Sold Date': 'Last Sold Date', 'Current Zone': 'Current Zone', 'Overlays': 'Overlays', 'Current RLP': 'Current RLP', 'Current OPC': 'Current OPC', 'Market Value (20%DM)': 'Market Value (20%DM)', 'Market Value (25%DM)': 'Market Value (25%DM)', 'Market Value (30%DM)': 'Market Value (30%DM)', 'Market Value (15%DM)': 'Market Value (15%DM)', 'Lot Yield @ 20Dw/Ha': 'Lot Yield @ 20Dw/Ha', 'Vendor Company': 'Vendor Company', 'Vendor Names': 'Vendor Names', 'Vendor Mobiles': 'Vendor Mobiles', 'Vendor Emails': 'Vendor Emails', 'Vendor Addresses': 'Vendor Addresses', 'Major Landowner': 'Major Landowner', 'Estate Status': 'Estate Status', 'Developer': 'Developer', 'Development Contributions per Lot': 'Development Contributions per Lot', 'Lead Link': 'Lead Link', });
lyr_ParcelAttributes_4.set('fieldImages', {'fid': 'TextEdit', 'Unique ID': 'TextEdit', 'Address': 'TextEdit', 'Strategy': 'TextEdit', 'Strategy Link': 'TextEdit', 'PSP Status': 'TextEdit', 'Zoned / Rezone': 'TextEdit', 'Primary Product': 'TextEdit', 'Suburb': 'TextEdit', 'Gross HA': 'TextEdit', 'NDH': 'TextEdit', 'Last Sold Price': 'TextEdit', 'Last Sold Date': 'DateTime', 'Current Zone': 'TextEdit', 'Overlays': 'TextEdit', 'Current RLP': 'Range', 'Current OPC': 'Range', 'Market Value (20%DM)': 'Range', 'Market Value (25%DM)': 'Range', 'Market Value (30%DM)': 'Range', 'Market Value (15%DM)': 'Range', 'Lot Yield @ 20Dw/Ha': 'TextEdit', 'Vendor Company': 'TextEdit', 'Vendor Names': 'TextEdit', 'Vendor Mobiles': 'TextEdit', 'Vendor Emails': 'TextEdit', 'Vendor Addresses': 'TextEdit', 'Major Landowner': 'TextEdit', 'Estate Status': 'TextEdit', 'Developer': 'TextEdit', 'Development Contributions per Lot': 'Range', 'Lead Link': 'TextEdit', });
lyr_ParcelAttributes_4.set('fieldLabels', {'fid': 'hidden field', 'Unique ID': 'hidden field', 'Address': 'inline label - visible with data', 'Strategy': 'inline label - visible with data', 'Strategy Link': 'inline label - visible with data', 'PSP Status': 'inline label - visible with data', 'Zoned / Rezone': 'inline label - visible with data', 'Primary Product': 'inline label - visible with data', 'Suburb': 'hidden field', 'Gross HA': 'inline label - visible with data', 'NDH': 'inline label - visible with data', 'Last Sold Price': 'inline label - visible with data', 'Last Sold Date': 'inline label - visible with data', 'Current Zone': 'inline label - visible with data', 'Overlays': 'inline label - visible with data', 'Current RLP': 'inline label - visible with data', 'Current OPC': 'inline label - visible with data', 'Market Value (20%DM)': 'inline label - visible with data', 'Market Value (25%DM)': 'inline label - visible with data', 'Market Value (30%DM)': 'inline label - visible with data', 'Market Value (15%DM)': 'inline label - visible with data', 'Lot Yield @ 20Dw/Ha': 'inline label - visible with data', 'Vendor Company': 'inline label - visible with data', 'Vendor Names': 'inline label - visible with data', 'Vendor Mobiles': 'inline label - visible with data', 'Vendor Emails': 'inline label - visible with data', 'Vendor Addresses': 'inline label - visible with data', 'Major Landowner': 'inline label - visible with data', 'Estate Status': 'inline label - visible with data', 'Developer': 'inline label - visible with data', 'Development Contributions per Lot': 'inline label - visible with data', 'Lead Link': 'inline label - visible with data', });
lyr_ParcelAttributes_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});