class Array
  def square
    # create your square method here
    map {|x| x ** 2}
  end
  
  def cube
    map {|x| x ** 3}
  end
  
  def average
    return sum / length
  end
  
  def even
   select {|num| num.even?}
  end
  
  def odd
    select {|num|  !num.even?}
  end
end

# now fill in the rest

