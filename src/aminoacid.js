define(function() {
	"use strict";
	
	function AminoAcid(one, three, name, mass) {
	    this.one = one;
	    this.three = three;
	    this.name = name;
	    this.mass = mass;
	}
	
	// layer 0: the bare data
	// source: http://education.expasy.org/student_projects/isotopident/htdocs/aa-list.html
	// masses:
	//   average over isotope abundances
	//   missing acid OH, H from N
	var aaData = [
	    ['A', 'Ala', 'Alanine'      ,   71.0788], 
	    ['R', 'Arg', 'Arginine'     ,  156.1875],
	    ['N', 'Asn', 'Asparagine'   ,  114.1038],
	    ['D', 'Asp', 'Aspartate'    ,  115.0886],
	    ['C', 'Cys', 'Cysteine'     ,  103.1388],
	    ['E', 'Glu', 'Glutamate'    ,  129.1155],
	    ['Q', 'Gln', 'Glutamine'    ,  128.1307],
	    ['G', 'Gly', 'Glycine'      ,   57.0519],
	    ['H', 'His', 'Histidine'    ,  137.1411],
	    ['I', 'Ile', 'Isoleucine'   ,  113.1594],
	    ['L', 'Leu', 'Leucine'      ,  113.1594],
	    ['K', 'Lys', 'Lysine'       ,  128.1741],
	    ['M', 'Met', 'Methionine'   ,  131.1926],
	    ['F', 'Phe', 'Phenylalanine',  147.1766],
	    ['P', 'Pro', 'Proline'      ,   97.1167],
	    ['S', 'Ser', 'Serine'       ,   87.0782],
	    ['T', 'Thr', 'Threonine'    ,  101.1051],
	    ['W', 'Trp', 'Tryptophan'   ,  186.2132],
	    ['Y', 'Tyr', 'Tyrosine'     ,  163.1760],
	    ['V', 'Val', 'Valine'       ,   99.1326]];
	
	// layer 1: maps keyed by each attribute    
	var aas = aaData.map(function(d) {
	        return new AminoAcid(d[0], d[1], d[2], d[3]); // ugh, wish I could just apply
	    }),
	    ones = {},
	    threes = {},
	    names = {};
	
	aas.map(function(aa) {
	    ones[aa.one] = aa;
	    threes[aa.three] = aa;
	    names[aa.name] = aa;
	});
	
	// layer 2: functions for accessing an amino acid by key
	function fromOneLetter(l) {
	    if ( ones.hasOwnProperty(l) ) {
	        return ones[l];
	    }
	    throw new Error('invalid one letter abbreviation: ' + l);
	}
	
	function fromThreeLetter(ls) {
	    if ( threes.hasOwnProperty(ls) ) {
	        return threes[ls];
	    }
	    throw new Error('invalid 3 letter abbreviation: ' + ls);
	}
	
	function fromName(name) {
	    if ( names.hasOwnProperty(name) ) {
	        return names[name];
	    }
	    throw new Error('invalid name: ' + name);
	}
	
	// layer 3: translator functions
	function oneToThree( l ) {
	    return fromOneLetter(l).three;
	}
	
	function threeToOne( thr ) {
	    return fromThreeLetter(thr).one;
	}
	
	
	return {
	    'aminoAcids'       :  aas,
	    'ones'             :  ones,
	    'threes'           :  threes,
	    'fullnames'        :  names,
	    
	    'fromOneLetter'    :  fromOneLetter,
	    'fromThreeLetter'  :  fromThreeLetter,
	    'fromName'         :  fromName,
	    
	    'oneToThree'       :  oneToThree,
	    'threeToOne'       :  threeToOne
	};

});
