var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = SARProcessing","category":"page"},{"location":"#SARProcessing","page":"Home","title":"SARProcessing","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for SARProcessing.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [SARProcessing]","category":"page"},{"location":"#SARProcessing.MetaDataSLC","page":"Home","title":"SARProcessing.MetaDataSLC","text":"SwathSLC\n\nA datatype for a Sentinel 1 Single Look Complex (SLC) swath subset. \n\nArguments\n\nmetadata::MetaDataSLC: Meta data for the Sentinel 1 swath\nindexOffset::Tuple{Int,Int}: Pixel offeset of the subset with respect to the complete swath\npixels::Array{Complex,2}: The pixel values of the swath subset\n\n\n\n\n\n","category":"type"},{"location":"#SARProcessing.MetaDataSentinel1","page":"Home","title":"SARProcessing.MetaDataSentinel1","text":"MetaDataSentinel1:     Metadata structure for the Sentinel-1 satellite for each burst in the swath.\n\nGeneral metadata info is kept in the following structures:\n    - Sentinel1Header\n    - Sentinel1ProductInformation\n    - Sentinel1ImageInformation\n    - Sentinel1SwathTiming\n    - Sentinel1GeolocationGrid\nSentinel1BurstInformation specific Info is kept in \n    - Vector{Sentinel1BurstInformation}\n\nExample:     slcMetadata = MetaDataSentinel1(meta_dict)\n\nInput:\n    meta_dict: xml file.\n\ncan be accessed as, e.g., \nslcMetadata.product.radar_frequency --> 5.40500045433435e9::Float64\nslcMetadata.header.swath --> 1::Int\nslcMetadata.header.mode --> \"IW\"::String\nslcMetadata.header.polarisation --> VH::String\n\n\n\n\n\n","category":"type"},{"location":"#SARProcessing.MetaDataSentinel1-Tuple{String}","page":"Home","title":"SARProcessing.MetaDataSentinel1","text":"\" MetaDataSentinel1\n\nConstructors for the MetaDataSentinel1 structure. \nIt takes a Sentinel-1 single swath metafile in .xml format and constructs the metadata structure using the individual sub-structures in the metadata.\nThe individual sub-structures in the metadata are:\n- Sentinel1Header\n- Sentinel1ProductInformation\n- Sentinel1ImageInformation\n- Sentinel1SwathTiming\n- Sentinel1BurstInformation\n- Sentinel1GeolocationGrid\n\nInput:\n    xmlFile[string]: path of swath specific metadata in xml.format.\n\noutput:\n    MetaDataSentinel1[structure of MetaDataSentinel1]: Structure with all Sentinel-1 metadata for a swath.\n\n\nExample:\n\nGetting the t0 for the 5th burst:\n    metadata = MetaDataSentinel1(annotation.xml)\n    metadata.bursts.azimuthFmRate[5].t0\n\n\n\n\n\n","category":"method"},{"location":"#SARProcessing.Sentinel1AzimuthFmRate","page":"Home","title":"SARProcessing.Sentinel1AzimuthFmRate","text":"Sentinel1AzimuthFmRate\n\nreturns structure of Sentinel1AzimuthFmRate from metadata in .xml Sentinel1AzimuthFmRate is calculated for each burst, and is therefore saved in each burst\n\n\n\n\n\n","category":"type"},{"location":"#SARProcessing.Sentinel1AzimuthFmRate-Tuple{Any, Dates.DateTime}","page":"Home","title":"SARProcessing.Sentinel1AzimuthFmRate","text":"\" Sentinel1AzimuthFmRate\n\nConstructors for the Sentinel1AzimuthFmRate structure. \n\nIt takes a dictionary containing the full sentinel-1 swath metadata and extracts the Sentinel1AzimuthFmRate data for a single burst as a structure. \n\nNote:\n    [ ] Perhaps change input vars from strutures to the specific values. -- Does the current implementaion use extra time?\n    [ ] What is needed? Maybe, e.g., polynomial is redudant in the later processing. Could then be deleted.\n\n\n\n\n\n","category":"method"},{"location":"#SARProcessing.Sentinel1BurstInformation","page":"Home","title":"SARProcessing.Sentinel1BurstInformation","text":"Sentinel1BurstInformation\n\nreturns structure of Sentinel1BurstInformation from metadata in .xml Sentinel1BurstInformation contain information from Sentinel1DopplerCentroid and Sentinel1AzimuthFmRate\n\n\n\n\n\n","category":"type"},{"location":"#SARProcessing.Sentinel1BurstInformation-2","page":"Home","title":"SARProcessing.Sentinel1BurstInformation","text":"\" Sentinel1BurstInformation\n\nConstructors for the Sentinel1BurstInformation structure. \n\nIt takes a dictionary containing the full sentinel-1 swath metadata and extracts the Sentinel1BurstInformation specific data for a single burst as a structure. \n\nInput:\n    meta_dict[dict]: a dictionary of the metadata.burst_number\n\n[Int]: Integer value of burst number.\n\noutput:\n    Sentinel1BurstInformation[structure of Sentinel1BurstInformation]\n\n\n\n\n\n","category":"type"},{"location":"#SARProcessing.Sentinel1DopplerCentroid","page":"Home","title":"SARProcessing.Sentinel1DopplerCentroid","text":"Sentinel1DopplerCentroid\n\nreturns structure of Sentinel1DopplerCentroid from metadata in .xml Sentinel1DopplerCentroid is calculated for each burst, and is therefore saved in each burst\n\n\n\n\n\n","category":"type"},{"location":"#SARProcessing.Sentinel1DopplerCentroid-Tuple{Any, Dates.DateTime}","page":"Home","title":"SARProcessing.Sentinel1DopplerCentroid","text":"\" Sentinel1DopplerCentroid\n\nConstructors for the Sentinel1DopplerCentroid structure. \n\nIt takes a dictionary containing the full sentinel-1 swath metadata and extracts the Sentinel1DopplerCentroid data for a single burst as a structure. \n\nNote:\n    [ ] Perhaps change input vars from strutures to the specific values. -- Does the current implementaion use extra time?\n    [ ] What is needed? Maybe, e.g., polynomial is redudant in the later processing. Could be deleted.\n\n\n\n\n\n","category":"method"},{"location":"#SARProcessing.Sentinel1GeolocationGrid","page":"Home","title":"SARProcessing.Sentinel1GeolocationGrid","text":"Sentinel1GeolocationGrid\n\nreturns structure of Sentinel1GeolocationGrid from metadata in .xml\n\n\n\n\n\n","category":"type"},{"location":"#SARProcessing.Sentinel1GeolocationGrid-Tuple{Any}","page":"Home","title":"SARProcessing.Sentinel1GeolocationGrid","text":"\" Sentinel1GeolocationGrid\n\nConstructors for the Sentinel1GeolocationGrid structure. \n\nIt takes a dictionary containing the full sentinel-1 swath metadata and extracts the Sentinel1GeolocationGrid as a structure. Input in the Sentinel1GeolocationGrid file:\n    lines: Reference image MDS line to which this geolocation grid point applies.\n    samples,\n    latitude: Geodetic latitude of grid point [degrees].\n    longitude: Geodetic longitude of grid point [degrees].\n    azimuth_time: Zero Doppler azimuth time to which grid point applies [UTC].\n    slant_range_time: Two-way slant range time to grid point [milli sec].\n    elevation_angle: Elevation angle to grid point [degrees].\n    incidence_angle: Incidence angle to grid point [degrees].\n    height: Height of the grid point above sea level [m].\n\nExample:\n    # accesing the geolocation data from the full metadata.\n    xmlPath = \"s1a-iw1-slc-vh-20220220t144146-20220220t144211-041998-050092-001.xml\"\n    Metadata1 = MetaDataSentinel1(xmlPath)\n    geolocation = Metadata1.geolocation\n\n    # accessing the geolocation directly from the xml.\n    meta_dict = read_xml_as_dict(xmlPath)\n    geolocation = Sentinel1GeolocationGrid(meta_dict)\n    \n\nInput:\n    meta_dict[dict]: a dictionary of the metadata.\n\noutput:\n    Sentinel1GeolocationGrid[structure of Sentinel1GeolocationGrid]\n\n\n\n\n\n","category":"method"},{"location":"#SARProcessing.Sentinel1Header","page":"Home","title":"SARProcessing.Sentinel1Header","text":"Sentinel1Header\n\nreturns structure of Sentinel1Header from metadata in .xml\n\n\n\n\n\n","category":"type"},{"location":"#SARProcessing.Sentinel1Header-Tuple{Any}","page":"Home","title":"SARProcessing.Sentinel1Header","text":"\" Sentinel1Header\n\nConstructors for the Sentinel1Header structure. \n\nIt takes a dictionary containing the full sentinel-1 swath metadata and extracts the Sentinel1Header as a structure. Input in the header file:\n    missionId: Mission identifier for this data set.\n    productType: Product type for this data set.\n    polarisation: Polarisation for this data set.\n    mission_data_take_id: Mission data take identifier.\n    swath: Swath identifier for this data set. This element identifies the swath that applies to all data contained within this data set. The swath identifier \"EW\" is used for products in which the 5 EW swaths have been merged. Likewise, \"IW\" is used for products in which the 3 IW swaths have been merged.\n    mode: Sensor mode for this data set.\n    start_time: Zero Doppler start time of the output image [UTC].\n    stop_time: Zero Doppler stop time of the output image [UTC].\n    absolute_orbit_number: Absolute orbit number at data set start time.\n    image_number: Image number. For WV products the image number is used to distinguish between vignettes. For SM, IW and EW modes the image number is still used but refers instead to each swath and polarisation combination (known as the 'channel') of the data.\n\nInput:\n    meta_dict[dict]: a dictionary of the metadata.\n\noutput:\n    Sentinel1Header[structure of Sentinel1Header]\n\n\n\n\n\n","category":"method"},{"location":"#SARProcessing.Sentinel1ImageInformation","page":"Home","title":"SARProcessing.Sentinel1ImageInformation","text":"Sentinel1ImageInformation\n\nreturns structure of Sentinel1ImageInformation from metadata in .xml\n\n\n\n\n\n","category":"type"},{"location":"#SARProcessing.Sentinel1ImageInformation-Tuple{Any}","page":"Home","title":"SARProcessing.Sentinel1ImageInformation","text":"\" Sentinel1ImageInformation\n\nConstructor for the Sentinel1ImageInformation structure. \n\nIt takes a dictionary containing the full sentinel-1 swath metadata and extracts the Sentinel1ImageInformation as a structure. Input in the Sentinel1ImageInformation file:\n    range_pixel_spacing: Pixel spacing between range samples [m].\n    azimuth_frequency: Azimuth line frequency of the output image [Hz]. This is the inverse of the azimuth_timeInterval.\n    slant_range_time: Two-way slant range time to first sample [milli sec].\n    incidence_angle_mid_swath: Incidence angle at mid swath [degrees].\n    azimuth_pixel_spacing: Nominal pixel spacing between range lines [m].\n    number_of_samples: Total number of samples in the output image (image width).\n\nInput:\n    meta_dict[dict]: a dictionary of the metadata.\n\noutput:\n    Sentinel1ImageInformation[structure of Sentinel1ImageInformation]\n\n\n\n\n\n","category":"method"},{"location":"#SARProcessing.Sentinel1ProductInformation","page":"Home","title":"SARProcessing.Sentinel1ProductInformation","text":"Sentinel1ProductInformation\n\nreturns structure of product information \n\n\n\n\n\n","category":"type"},{"location":"#SARProcessing.Sentinel1ProductInformation-Tuple{Any}","page":"Home","title":"SARProcessing.Sentinel1ProductInformation","text":"\" Sentinel1ProductInformation\n\nConstructors for the Sentinel1ProductInformation structure. \n\nIt takes a dictionary containing the full sentinel-1 swath metadata and extracts the Sentinel1ProductInformation as a structure. Sentinel1ProductInformation file:\n    pass: Direction of the orbit (ascending, descending)\n    timeliness_category: Timeliness category under which the product was produced, i.e. time frame from the data acquisition\n    platform_heading: Platform heading relative to North [degrees].\n    projection: Projection of the image, either slant range or ground range.\n    range_sampling_rate: Range sample rate [Hz]\n    radar_frequency: Radar (carrier) frequency [Hz]\n    azimuth_steering_rate: Azimuth steering rate for IW and EW modes [degrees/s].\n\nInput:\n    meta_dict[dict]: a dictionary of the metadata.\n\noutput:\n    Sentinel1ProductInformation[structure of Sentinel1ProductInformation]\n\n\n\n\n\n","category":"method"},{"location":"#SARProcessing.Sentinel1SwathTiming","page":"Home","title":"SARProcessing.Sentinel1SwathTiming","text":"Sentinel1SwathTiming\n\nreturns structure of Sentinel1SwathTiming from metadata in .xml\n\n\n\n\n\n","category":"type"},{"location":"#SARProcessing.Sentinel1SwathTiming-Tuple{Any}","page":"Home","title":"SARProcessing.Sentinel1SwathTiming","text":"\" Sentinel1SwathTiming\n\nConstructors for the Sentinel1SwathTiming structure. \n\nIt takes a dictionary containing the full sentinel-1 swath metadata and extracts the Sentinel1SwathTiming as a structure. \n\nInput:\n    meta_dict[dict]: a dictionary of the metadata.\n\noutput:\n    Sentinel1SwathTiming[structure of Sentinel1SwathTiming]\n\n\n\n\n\n","category":"method"},{"location":"#SARProcessing.SwathSLC","page":"Home","title":"SARProcessing.SwathSLC","text":"SwathSLC\n\nA datatype for a Sentinel 1 Single Look Complex (SLC) swath subset. \n\n# Arguments\n- `metadata::MetaDataSLC`: Meta data for the Sentinel 1 swath\n- `indexOffset::Tuple{Int,Int}`: Pixel offeset of the subset with respect to the complete swath\n- `pixels::Array{Complex,2}`: The pixel values of the swath subset\n\n\n\n\n\n","category":"type"},{"location":"#SARProcessing.ecef2geodetic-Union{Tuple{Vector{T}}, Tuple{T}} where T<:Real","page":"Home","title":"SARProcessing.ecef2geodetic","text":"ecef2geodetic(ecefcoordinate::Array{Real,1};                         semimajoraxis=6378137., flattening=1/298.257223563,                         tolerancelatitude = 1.e-12, tolerance_height = 1.e-5)\n\nConvert ECEF-coordinates [X,Y,Z] to geodetic-coordinates [latitude(radians),longitude(radians),height] (WGS-84) radians\n\n(Based on B.R. Bowring, \"The accuracy of geodetic latitude and height equations\",\nSurvey Review, v28 #218, October 1985 pp.202-206).\n\n\n\n\n\n","category":"method"},{"location":"#SARProcessing.ellipsoid_intersect-Union{Tuple{T}, Tuple{S}, Tuple{Vector{T}, Vector{S}}} where {S<:Real, T<:Real}","page":"Home","title":"SARProcessing.ellipsoid_intersect","text":"ellipsoidintersect(xsat::Array{Real,1},normalisedlineofsight::Array{Real,1};                                 semimajor_axis::Real=6378137.,flattening::Real=1/298.257223563)\n\nComputes the intersection between the satellite line of sight and the earth ellipsoid in ECEF-coordinates\n# Arguments\n- `x_sat::Array{Real,1}`: [X,Y,Z] position of the satellite in ECEF-coordinates.\n- `normalised_line_of_sight::Array{Real,1}`: Normalised Line of sight\n# Output\n- `x_0::Array{Real,1}`: intersection between line and ellipsoid in ECEF-coordinates.\n# Note:\nEquations follows I. Cumming and F. Wong (2005) p. 558-559\n\n\n\n\n\n","category":"method"},{"location":"#SARProcessing.geodetic2ecef-Union{Tuple{Vector{T}}, Tuple{T}} where T<:Real","page":"Home","title":"SARProcessing.geodetic2ecef","text":"geodetic2ecef(geodeticcoordinate::Array{Real,1}; semimajoraxis::Real=WGS84SEMIMAJORAXIS,     flattening::Real=WGS84_FLATTENING)\n\nConvert geodetic-coordinates [latitude(radians),longitude(radians),height] (WGS-84) to ECEF-coordinates [X,Y,Z]\n\n\n\n\n\n","category":"method"},{"location":"#SARProcessing.get_sentinel1_annotation_paths-Tuple{String}","page":"Home","title":"SARProcessing.get_sentinel1_annotation_paths","text":"getsentinel1annotationpaths(safepath::string)\n\nGetting the paths for the annotation files for a SLC image using its .SAFE folder path.\n\nParameters\n\n* safe_path::String: path of .SAFE folder for one image.\n\nReturns\n\n* annotationPaths::Vector: Vector of paths for annotation files in .SAFE folder\n\n\n\n\n\n","category":"method"},{"location":"#SARProcessing.load_precise_orbit_sentinel1-Tuple{Any}","page":"Home","title":"SARProcessing.load_precise_orbit_sentinel1","text":"loadpreciseorbit_sentinel1(path)\n\nLoads a Sentinel 1 orbit file\n\nReturns\n\nVector{OrbitState}\n\n\n\n\n\n","category":"method"},{"location":"#SARProcessing.load_tiff","page":"Home","title":"SARProcessing.load_tiff","text":"load_tiff(filepath::String, window=nothing; convertToDouble = true,flip = true)\n\nRead a Sentinel 1 tiff file.\n# Examples:\n```jldoctest\njulia> filepath = \"s1a-iw3-slc-vv-20220918t074921-20220918t074946-045056-056232-006.tiff\"\njulia> data = readSwathSLC(filePath, [(501,600),(501,650)]);\njulia> typeof(data)\nMatrix{ComplexF64}\njulia> size(data)\n(100,150)\n```\n\n\n\n\n\n","category":"function"},{"location":"#SARProcessing.read_meta_data_slc-Tuple{String}","page":"Home","title":"SARProcessing.read_meta_data_slc","text":"readmetadata_slc(filepath::String) Returns: ::MetaDataSLC\n\n\n\n\n\n","category":"method"},{"location":"#SARProcessing.read_slc-Tuple{String, Any}","page":"Home","title":"SARProcessing.read_slc","text":"read_slc(folder::String, window) Returns: ::Array{SwathSLC,1}\n\n\n\n\n\n","category":"method"},{"location":"#SARProcessing.sar2gray-Union{Tuple{AbstractArray{T}}, Tuple{T}} where T<:Real","page":"Home","title":"SARProcessing.sar2gray","text":"sar2gray(data::AbstractArray; p_quantile = 0.85)\n\nMaps the data to values between 0 and 1 and convert into a gray scaled image.  The minimum data value is mapped to 0 and all values above the p_quantile is mapped to 1\n\n\n\n\n\n","category":"method"},{"location":"#SARProcessing.search_directory-Tuple{Any, Any}","page":"Home","title":"SARProcessing.search_directory","text":"\"\n\nsearch dir\n\nSearching a directory for files with extension.\n\n\n\n\n\n","category":"method"}]
}
