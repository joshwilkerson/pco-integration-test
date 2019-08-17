export const testData = [
	{
		id: 1,
		app: "giving",
		name: "Giving Form",
		data: "https://carlsbad.staging.churchcenter.com/giving",
	},
	{
		id: 2,
		app: "people",
		name: "A Very Nice Form",
		data: "https://carlsbad.churchcenter.com/people/forms/160",
	},
	{
		id: 3,
		app: "resources",
		name: "Room Schedule",
		data: `<div id="resources_calendar_widget" class="styled">
  <div class="loader">Loading...</div>
</div>
<script type="text/javascript">
  (function(){
    var rs = document.createElement("script");
    rs.type = "text/javascript";
    rs.async = true;
    rs.src = "//resources-staging.planningcenteronline.com/widgets/eJxj4ajmsGLLz-Sy4kotzi8oAfFKPJU4DS1MDNms2FxDrNiKPZX4E3Ny4lPLUvNKitmsOYBipZkqVtwFiUWJucXVDAA_EBH2a564c06223b88e1245f4b3d07477dc9ab348339c.js";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(rs,s);
  })();
</script>`,
	},
]
