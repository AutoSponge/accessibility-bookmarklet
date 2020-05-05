isLG_SideTabs() {
	return (document.querySelector('.s-lg-tabs-side') !== null);
}


outputLinkedLibGuideContent() {
	var a, t, m)
	var e = document.querySelectorAll('a i.s-lg-file-icon');	
	var reg1 = /fa-file-(\w+)-o/;
	var reg2 = /content_id=([0-9]+)/;

	ret = 'LINKED LIBGUIDE CONTENT\n';
	if(e.length === 0)
		ret += 'No linked content detected.\n';
	else
		ret += 'File Type\tLink Text\tURL\tLG Asset ID\tHuman: File Type Labelled?\tHuman: Accessibility Comments\n';
	for(i=0; i<e.length; i++) {
		a = e[i].parentElement;
		t = '???';
		if(m = reg1.exec(a.className)) !== null)
			t = m[1];
		ret += t.toUpperCase() + '\t';
		ret += getAccName(a).name + '\t';
		ret += a.href + '\t';
		if(m = reg2.exec(a.href)) !== null)
			ret += m[1];
		ret += '\t';
		ret += '\n';
	}
	ret += '\n';
	return ret;
}



function getImgBySrc(src) {
	var e = document.querySelectorAll('img');
	for(var i=0; i<e.length; i++) 
		if(e[i].src == src)
			return e[i];
	return null;
}




function outputLibguidesImages() {
	var e,i,j;
	var imgRep = outputImages();
	var lines = imgRep.split('\n');
	var temp = lines[0] + '\n';
	// first line of column headers
	var x = 0;
	var cols = lines[1].split('\t');
	while(cols[x].indexOf('Human') == -1) {
		x += 1;
	}
	for(j=0; j<x; j++)
		temp += cols[j] + '\t';
	temp += 'Is Book Cover';
	for(j=x; j<cols.length; j++)
		temp += '\t' + cols[j];
	temp += '\n';

	for(var i=2; i<lines.length; i++) {
		var cols = lines[i].split('\t');
		if(cols.length == 1) {
			temp += lines[i] + '\n';
			continue;
		}
		for(var j=0; j<x; j++) 
			temp += cols[j] + '\t';
		if(cols[0] == 'IMG') {
			e = getImgBySrc(cols[1]);
			if(e.getAttribute('class').indexOf('s-lg-book-cover') != -1)
				temp += 'TRUE';
		}
		temp += '\t';
		
		for(j=x; j<cols.length; j++)
			temp += '\t' + cols[j];
		temp += '\n';

	}
	return temp;
}