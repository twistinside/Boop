/**
	{
		"api":1,
		"name":"Replace Escaped Line Breaks",
		"description":"Replace escaped line breaks with actual line breaks.",
		"author":"twistinside",
		"icon":"collapse",
		"tags":"newline,escaped,line,break"
	}
**/

function main(input) {
	input.text = input.text.replaceAll("\\n", "\n");
}
