package test;

/**
 * 用于分页的工具类
 */
public class Page {

	private int total = 0; // 总记录数
	private int limitLength = 20; // 每页显示记录数
	private int limitStart = 0; // 每页起始记录数
	private int pages = 1; // 总页数
	private int pageNow = 1; // 当前页
	
	
	public Page(int total, int pageNow) {
		init(total, pageNow, limitLength);
	}
	
	public Page(int total, int pageNow, int limitLength) {
		init(total, pageNow, limitLength);
	}
	
	private void init(int total, int pageNow, int limitLength){
		//设置基本参数
		this.total=total;
		this.limitLength=limitLength;
		this.pages=(this.total-1)/this.limitLength+1;
		
		//根据输入可能错误的当前号码进行自动纠正
		if(pageNow<1){
			this.pageNow=1;
		}else if(pageNow>this.pages){
			this.pageNow=this.pages;
		}else{
			this.pageNow=pageNow;
		}
		
		this.limitStart = this.limitStart + (this.pageNow-1) * this.limitLength;
	}
	
	public int getTotal() {
		return total;
	}
	public int getPages() {
		return pages;
	}

	public int getpageNow() {
		return pageNow;
	}

	public int getLimitLength() {
		return limitLength;
	}

	public int getLimitStart() {
		return limitStart;
	}

	public int getPageNow() {
		return pageNow;
	}

	public String toString(){
		String str=new String();
		str= "[" +
			"total="+total+
			",pages="+pages+
			",pageNow="+pageNow+
			",limitStart="+limitStart+
			",limitLength="+limitLength;
		str+="]";
		return str;
	}
	public static void main(String[] args) {
		//记录数   当前页  起始条数
		Page p = new Page(21, 3, 2);
		System.out.println(p.toString());
	}
}