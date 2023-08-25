class Node
    attr_accessor :value, :right, :left
    def initialize(value)
        @value = value
        @right = nil
        @left = nil
    end
end

class BST
    attr_accessor :root
    def initialize()
        @root = nil
    end

    def is_empty?
        @root.nil?
    end

    def insert(value)
        new_node = Node.new(value)

        if is_empty?
            @root = new_node
        else
            insert_node(@root, new_node)
        end
    end

    def insert_node(parent, new_node)
        if new_node.value < parent.value
            if parent.left.nil?
                parent.left = new_node
            else
                insert_node(parent.left, new_node)
            end
        else
            if parent.right.nil?
                parent.right = new_node
                else
                insert_node(parent.right, new_node)
            end
        end
    end

    def search(root, value)
        if root.nil?
            false
            else
             if value == root.value
                true
             elsif value < root.value
                search(root.left, value)
             else
                search(root.right, value)
             end   
        end
    end

    def pre_order(root)
        return if root.nil?

        puts root.value
        pre_order(root.left)
        pre_order(root.right)
    end

    def in_order(root)
        return if root.nil?
        in_order(root.left)
        puts root.value
        in_order(root.right)
    end

    def post_order(root)
        return if root.nil?
        
        post_order(root.left)
        post_order(root.right)
        puts root.value
    end

    # BFS
    def level_order
        queue = []
        queue.push(@root)
        while !queue.empty?
            curr = queue.shift()
            # Skip processing if the current node is nil,else ruby will raise error
            next unless curr

            puts curr.value
            if curr.left
                queue.push(curr.left)
            end
            if curr.right
                queue.push(curr.right)
            end
        end
    end

    def min(root)
        if !root.left
        # Terminate the process when base case is reached --return
           return  root.value
        else
            min(root.left)
        end
    end

    def max(root)
        if !root.right
         # Terminate the process when base case is reached --return
           return  root.value
        else
            max(root.right)
        end
    end

    def delete(value)
        @root = delete_node(@root, value)
    end

    def delete_node(root, value)
        if !root
            return root
        end
        if value < root.value
            root.left = delete_node(root.left, value)
        elsif value > root.value
            root.right = delete_node(root.right, value)
        else
            if !root.left && !root.right
                return  nil
            end
            if !root.right
                # Terminate the process to stop execution of the next lines --return
                return root.left
            end
            if !root.left
                # Terminate the process to stop execution of the next lines --return
                return root.right
            end
            root.value = min(root.right)
            root.right = delete_node(root.right, root.value)
        end
        return root
    end
end

# if you want to check if operations are working  as expected, uncomment one operation at time to not confuse your self. I simplified below every operation's test code.

bst = BST.new

values_to_insert = [10, 15, 5,7,3]

values_to_insert.each do |value|
    bst.insert(value)
end

# Run 'ruby bst.rb' in the console
=begin
 =>seraching
# puts bst.search(bst.root, 15) #ture
# puts bst.search(bst.root, 4) #false
=end
=begin
min and max
# puts bst.max(bst.root)  #15
# puts bst.min(bst.root) #3
=end

=begin
Traversalling
=> BFS
# bst.level_order # 10 5 15 3 7

=>DFS
# bst.pre_order(bst.root) # 10 5 3 7 15 
# bst.in_order(bst.root) # 3 5  7 10 15 
bst.post_order(bst.root) #3 7 5 15 10
=end

=begin
bst.level_order
puts # for console space
bst.delete(3) #3 removed
bst.level_order # 10 5 15 7
=end