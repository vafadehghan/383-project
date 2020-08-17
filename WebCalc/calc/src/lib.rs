pub extern fn main() {
    println!("Hello, world!");
}

#[no_mangle]
fn fib(n: usize) ->u32 
{  
    if n == 0{
        return 0
    }
    if n == 1{
        return 1
    }
    let mut fib = vec![0; n+2];
    fib[0] = 0;
    fib[1] = 1;
    for i in 2..n+1
    { 
       fib[i] = fib[i - 1] + fib[i - 2]; 
    } 
    return fib[n];  
}

#[no_mangle]
fn fibrec(n: usize) ->usize 
{  
    if n <= 1 {
        return n;
    }
    return fibrec(n-1) + fibrec(n-2);
}

#[no_mangle]
fn catalan(n: usize) -> u32{
    if n == 0{
        return 1
    }
    if n == 1{
        return 1
    }
    let mut cat = vec![0; n+1];
    cat[0] = 1;
    cat[1] = 1;
    for i in 2..n+1{
        cat[i] = 0;
        for j in 0..i{
            cat[i] += cat[j] * cat[i-j-1];
        }
    }
    return cat[n]
} 

#[no_mangle]
fn catalanrec(n: u32) ->u32 
{  
    if n <= 1{
        return 1; 
    } 
    let mut result = 0; 
    for i in 0..n{
        result += catalanrec(i)*catalanrec(n-i-1); 
    }
        
    return result; 
} 